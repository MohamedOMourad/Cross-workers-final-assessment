import { Meteor } from 'meteor/meteor';
import { People } from '/people/people';
import { CronJob } from 'cron';

export const RunCheckoutHandlerJob = () => {
  const checkInJob = new CronJob(
    '*/5 * * * * *',
    Meteor.bindEnvironment(async function () {
      const now = new Date();
      // Find all check-ins where the 5-second window has passed
      const people = await People.updateAsync(
        {
          checkInTime: { $lte: new Date(now.getTime() - 5000) },
          readyForCheckout: { $ne: true },
        },
        {
          $set: { readyForCheckout: true },
        },
        { multi: true } // Update multiple documents
      );
      console.log({ people });
    })
  );

  return checkInJob;
};
