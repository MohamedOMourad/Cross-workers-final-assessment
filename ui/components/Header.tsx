import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({
  setSidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
}) => {
  return (
    <div className="sticky top-0 z-40 flex flex-row h-16 shrink-0 items-center justify-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-12">
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
      <div className="lg:pl-80 basis-1/2">
        <h1 className="">Event Tracker System</h1>
      </div>
      {/* Search */}
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center justify-center">
        {/* Search */}
        <form action="#" method="GET" className="relative flex flex-1">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
          />
          <input
            id="search-field"
            name="search"
            type="search"
            placeholder="Search..."
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
