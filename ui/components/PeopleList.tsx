import React from 'react';

import PersonDetails from './PersonDetails';
import PersonStatus from './PersonStatus';

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
          <PersonStatus {...person} />
          <PersonDetails {...person} />
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
