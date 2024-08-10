import React from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';

import { XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

type MobileSideBarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  events: CommunityDocument[] | undefined;
  selectedEvent: string;
  setSelectedEvent: (value: string) => void;
};

const MobileSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  events,
  selectedEvent,
  setSelectedEvent,
}: MobileSideBarProps) => {
  return (
    <>
      {' '}
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <h1 className="text-2xl font-semibold leading-7 text-gray-900">
                  Communities
                </h1>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {events?.map((event) => (
                        <li key={event._id}>
                          <button
                            type="button"
                            onClick={() => setSelectedEvent(event._id)}
                            className={classNames(
                              event._id === selectedEvent
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            )}
                          >
                            {event.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileSidebar;
