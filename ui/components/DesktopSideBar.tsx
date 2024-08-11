import React from 'react';
import { classNames } from '../utils';

type desktopSideBarProps = {
  events: CommunityDocument[] | undefined;
  selectedEvent: string;
  setSelectedEvent: (value: string) => void;
};

const DesktopSideBar = ({
  events,
  selectedEvent,
  setSelectedEvent,
}: desktopSideBarProps) => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <h1 className="text-2xl font-semibold leading-7 text-indigo-600">
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
                          ? 'bg-gray-100 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600',
                        'group flex gap-x-3 rounded-md p-2 text-xl font-semibold leading-6 w-52',
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
    </div>
  );
};

export default DesktopSideBar;
