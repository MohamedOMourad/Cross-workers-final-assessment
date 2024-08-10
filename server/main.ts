import { Meteor } from 'meteor/meteor';
import { loadInitialData } from '/infra/initial-data';
import { listAllPeople } from './actions/people';
import { listAllEvents } from './actions/events';
import { People } from '/people/people';

const methods = {
  listAllPeople,
  listAllEvents,
} as const;

Meteor.startup(async () => {
  // DON'T CHANGE THE NEXT LINE
  await loadInitialData();

  // YOU CAN DO WHATEVER YOU WANT HERE

  // rpc calls
  Meteor.methods(methods);

  Meteor.publish('people', function () {
    return People.find({
      check_in_time: { $gte: new Date(Date.now() - 5000) },
    });
  });
});
