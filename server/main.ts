import { Meteor } from 'meteor/meteor';
import { loadInitialData } from '/infra/initial-data';
import { addPersonForEvent } from './actions/addPersonForEvent';
import { removePersonFromEvent } from './actions/removePersonFromEvent';

import publishPeopleForEvent from './publish/peopleForEvent';
import publishCommunities from './publish/communities';
import { RunCheckoutHandlerJob } from './jobs/CheckInTimeout';

Meteor.startup(async () => {
  // DON'T CHANGE THE NEXT LINE
  await loadInitialData();

  // YOU CAN DO WHATEVER YOU WANT HERE
  publishCommunities();
  publishPeopleForEvent();
  RunCheckoutHandlerJob().start();

  Meteor.methods({
    addPersonForEvent,
    removePersonFromEvent,
  });
});
