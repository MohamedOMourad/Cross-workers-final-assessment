import React from 'react';

import Header from '../components/Header';

const Layout = ({
  children,
  setSidebarOpen,
}: {
  children: React.ReactNode;
  setSidebarOpen: (value: boolean) => void;
}) => {
  return (
    <>
      <Header setSidebarOpen={setSidebarOpen} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
