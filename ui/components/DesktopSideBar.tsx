import React from 'react';

const navigation = [{ name: 'Dashboard', href: '#', current: true }];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const DesktopSideBar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <h1 className="text-2xl font-semibold leading-7 text-gray-900">
            Communities
          </h1>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-50 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                      )}
                    >
                      {item.name}
                    </a>
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
