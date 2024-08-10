import React, { useState } from 'react';

import MobileSidebar from '../components/MobileSideBar';
import DesktopSideBar from '../components/DesktopSideBar';
import Header from '../components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Header setSidebarOpen={setSidebarOpen} />
      <main>
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <DesktopSideBar />
        <div className="lg:pl-72">
          <section className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Layout;
