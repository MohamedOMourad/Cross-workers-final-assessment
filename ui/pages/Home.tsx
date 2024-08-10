import React from 'react';
import { Communities } from '/communities/communities';
import useCollectionTracker from '../hooks/useCollectionTracker';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
const Home = () => {
  const { trackedCollection: communities, isLoading } = useCollectionTracker(
    Communities,
    'communities',
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(communities);

  return <div>Home</div>;
};

export default Home;
