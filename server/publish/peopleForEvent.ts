import { Meteor } from 'meteor/meteor';
import { Communities } from '/communities/communities';
import { People } from '/people/people';

Meteor.publish('peopleForEvent', (eventId) => {
  try {
    const selectedEvent = Communities.findOne(eventId);

    if (selectedEvent) {
      return People.find({ communityId: selectedEvent._id });
    }

    return People.find({ _id: '' });
  } catch (error) {
    console.error('Error fetching people data:', error);

    throw new Meteor.Error(
      'people-publish-error',
      error as string,
      'Error publishing people.',
    );
  }
});
