import { Meteor } from 'meteor/meteor';
import { People } from '/people/people';
export const removePersonFromEvent = (personId: string) => {
  try {
    const personRecord = People.findOne({ _id: personId });

    if (!personRecord) {
      throw new Meteor.Error(
        'person-not-found',
        'Person not found.',
        'Error removing person from event.',
      );
    }

    return People.updateAsync(personId, {
      $set: { checkOutDate: new Date(), updatedAt: new Date() },
    });
  } catch (error) {
    console.error('Error removing person from event:', error);

    throw new Meteor.Error(
      'remove-person-from-event-error',
      error as string,
      'Error removing person from event.',
    );
  }
};
