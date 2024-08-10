import { Meteor } from 'meteor/meteor';
import React from 'react';
import { listAllEvents } from '/server/actions/events';
import Home from './pages/Home';

const getAllEvents = async () => {
  return Meteor.callAsync('listAllEvents') as ReturnType<typeof listAllEvents>;
};

export const App = () => {
  return <Home />;
};
