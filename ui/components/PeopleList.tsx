import React from 'react';

import PersonDetails from './PersonDetails';
import PersonStatus from './PersonStatus';

type PeopleListProps = {
  people: PersonDocument[] | undefined;
};
const PeopleList = ({ people }: PeopleListProps) => {
  return (
    <ul role="list" className="divide-y divide-gray-300">
      {people?.map((person) => (
        <li
          key={person._id}
          className="flex flex-wrap items-center justify-between gap-x-1 lg:gap-x-6 py-6"
        >
          <PersonStatus {...person} />
          <PersonDetails {...person} />
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
