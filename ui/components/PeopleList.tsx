import React from 'react';
import Button from './Button';

const projects = [
  {
    id: 1,
    name: 'GraphQL API',
    href: '#',
    status: 'Complete',
    createdBy: 'Leslie Alexander',
    dueDate: 'March 17, 2023',
    dueDateTime: '2023-03-17T00:00Z',
  },
  {
    id: 2,
    name: 'New benefits plan',
    href: '#',
    status: 'In progress',
    createdBy: 'Leslie Alexander',
    dueDate: 'May 5, 2023',
    dueDateTime: '2023-05-05T00:00Z',
  },
  {
    id: 3,
    name: 'Onboarding emails',
    href: '#',
    status: 'In progress',
    createdBy: 'Courtney Henry',
    dueDate: 'May 25, 2023',
    dueDateTime: '2023-05-25T00:00Z',
  },
  {
    id: 4,
    name: 'iOS app',
    href: '#',
    status: 'In progress',
    createdBy: 'Leonard Krasner',
    dueDate: 'June 7, 2023',
    dueDateTime: '2023-06-07T00:00Z',
  },
  {
    id: 5,
    name: 'Marketing site redesign',
    href: '#',
    status: 'Archived',
    createdBy: 'Courtney Henry',
    dueDate: 'June 10, 2023',
    dueDateTime: '2023-06-10T00:00Z',
  },
];
type PeopleListProps = {
  people: PersonDocument[] | undefined;
};
const PeopleList = ({ people }: PeopleListProps) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people?.map((person) => (
        <li
          key={person._id}
          className="flex items-center justify-between gap-x-6 py-5"
        >
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.firstName}
              </p>
            </div>
            {/* <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p className="whitespace-nowrap">
                Due on{' '}
                <time dateTime={person.dueDateTime}>{person.dueDate}</time>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p className="truncate">Created by {person.createdBy}</p>
            </div> */}
          </div>
          <div className="flex flex-none items-center gap-x-4">
            {person.checkInTime ? (
              <Button
                size="small"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 hover:text-white w-32 sm:block"
              >
                Check Out
              </Button>
            ) : (
              <Button
                size="small"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-400 hover:text-white w-32 sm:block"
              >
                Check In
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
