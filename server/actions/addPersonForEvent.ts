import { Meteor } from 'meteor/meteor';
import { People } from '/people/people';

export const addPersonForEvent = (personId: string) => {
  try {
    const personRecord = People.findOne({ _id: personId });

    if (!personRecord) {
      throw new Meteor.Error(
        'person-not-found',
        'Person not found.',
        'Error adding person to event.',
      );
    }

    return People.updateAsync(personId, {
      $set: { checkInDate: new Date(), updatedAt: new Date() },
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
