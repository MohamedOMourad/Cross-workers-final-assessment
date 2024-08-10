import React, { useState } from 'react';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import useCollectionTracker from './hooks/useCollectionTracker';
import MobileSidebar from './components/MobileSideBar';
import DesktopSideBar from './components/DesktopSideBar';
import { Communities } from '/communities/communities';

export const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { trackedCollection: communities, isLoading } = useCollectionTracker(
    Communities,
    'communities',
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(communities);
  return (
    <Layout setSidebarOpen={setSidebarOpen}>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        events={communities}
      />
      {/* <DesktopSideBar events={communities} />s */}
      <Home />
    </Layout>
  );
};
