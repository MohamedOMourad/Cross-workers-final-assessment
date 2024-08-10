import { Meteor } from 'meteor/meteor';
import React from 'react';
import { listAllEvents } from '/server/actions/events';
import Layout from './layouts/Layout';

const getAllEvents = async () => {
  return Meteor.callAsync('listAllEvents') as ReturnType<typeof listAllEvents>;
};

export const App = () => {
  return <Layout />;
};
