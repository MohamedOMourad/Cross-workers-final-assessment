import { Meteor } from 'meteor/meteor';
import { People } from '/people/people';

export const addPersonForEvent = async (personId: string) => {
  try {
    const personRecord = People.findOne({ _id: personId });

    if (!personRecord) {
      throw new Meteor.Error(
        'person-not-found',
        'Person not found.',
        'Error adding person to event.',
      );
    }

    return await People.updateAsync(personId, {
      $set: { checkInTime: new Date(), readyForCheckout : false, updatedAt: new Date() },
    });
  } catch (error) {
    console.error('Error adding person to event:', error);

    throw new Meteor.Error(
      'add-person-to-event-error',
      error as string,
      'Error adding person to event.',
    );
  }
};
