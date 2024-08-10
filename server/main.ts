import { Meteor } from 'meteor/meteor';
import { loadInitialData } from '/infra/initial-data';
import { addPersonForEvent } from './actions/addPersonForEvent';
import { removePersonFromEvent } from './actions/removePersonFromEvent';
import './publish/communities';
import './publish/peopleForEvent';

Meteor.startup(async () => {
  // DON'T CHANGE THE NEXT LINE
  await loadInitialData();

  // YOU CAN DO WHATEVER YOU WANT HERE

  Meteor.methods({
    addPersonForEvent,
    removePersonFromEvent,
  });
});
