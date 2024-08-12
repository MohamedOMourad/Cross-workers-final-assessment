import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({
  setSidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
}) => {
  return (
    <div className="absolute top-0 left-0 w-full z-40 flex flex-row h-16 shrink-0 items-center justify-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-12">
      {/* Sidebar toggle */}
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
      {/* Separator */}
      <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />
      <h1 className="text-l lg:text-3xl text-indigo-600">Event Tracker System</h1>
    </div>
  );
};

export default Header;
