import { Meteor } from 'meteor/meteor';
import { People } from '/people/people';
import { CronJob } from 'cron';

export const RunCheckoutHandlerJob = () => {
  const checkInJob = new CronJob(
    '*/5 * * * * *',
    Meteor.bindEnvironment(async function () {
      const now = new Date();
      const people = await People.updateAsync(
        {
          checkInTime: { $lte: new Date(now.getTime() - 5000) },
          readyForCheckout: { $ne: true },
        },
        {
          $set: { readyForCheckout: true },
        },
        { multi: true }
      );
      console.log({ people });
    })
  );

  return checkInJob;
};
