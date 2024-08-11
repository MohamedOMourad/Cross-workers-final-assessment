import React, { useState } from 'react';
import PersonDetails from './PersonDetails';
import PersonStatus from './PersonStatus';
import Pagination from './Pagination';

type PeopleListProps = {
  people: PersonDocument[] | undefined;
};
const itemsPerPage = 10;

const paginationHAndler = (currentPage: number, people: PersonDocument[]) => {
  const LastPersonInThePage = currentPage * itemsPerPage;

  const FirstPersonInThePage = LastPersonInThePage - itemsPerPage;
  return people?.slice(FirstPersonInThePage, LastPersonInThePage);
};

const PeopleList = ({ people }: PeopleListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(people?.length || 1 / itemsPerPage);

  const currentPeoplePage = paginationHAndler(currentPage, people || []);

  const nextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <ul role="list" className="divide-y divide-gray-300">
        {currentPeoplePage?.map((person) => (
          <li
            key={person._id}
            className="flex flex-wrap xlg:flex-nowrap  items-center justify-between gap-x-1 lg:gap-x-6 py-6"
          >
            <PersonStatus {...person} />
            <PersonDetails {...person} />
          </li>
        ))}
      </ul>
      <Pagination
        nextPageHandler={nextPageHandler}
        currentPage={currentPage}
        previousPageHandler={previousPageHandler}
        totalPages={totalPages}
      />
    </>
  );
};

export default PeopleList;
