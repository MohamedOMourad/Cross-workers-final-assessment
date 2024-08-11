import React, { useState } from 'react';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import useCollectionTracker from './hooks/useCollectionTracker';
import MobileSidebar from './components/MobileSideBar';
import DesktopSideBar from './components/DesktopSideBar';
import { Communities } from '/communities/communities';
import { People } from '/people/people';

export const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = React.useState('');

  const { trackedCollection: communities, isLoading: loadingCommunities } =
    useCollectionTracker<CommunityDocument>(Communities, 'communities');

  const { trackedCollection: people, isLoading: loadingPeoples } =
    useCollectionTracker<PersonDocument>(
      People,
      'peopleForEvent',
      selectedEvent
    );

  return (
    <Layout setSidebarOpen={setSidebarOpen}>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        events={communities}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
      <DesktopSideBar
        events={communities}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
      <Home people={people} />
    </Layout>
  );
};
