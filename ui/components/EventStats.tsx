import React from 'react';

type EventStatsProps = {
  people: PersonDocument[] | undefined;
};
const EventStats = ({ people }: EventStatsProps) => {
  const numberOfPeopleInEvent = people?.filter(
    (person) => person.checkInTime && !person.checkOutTime
  ).length;

  const numberOfPeopleFromSameCompany = people?.reduce(
    (acc: { [key: string]: PersonDocument[] }, person) => {
      const { companyName } = person;
      if (companyName && person.checkInTime && !person.checkOutTime) {
        if (!acc[companyName]) {
          acc[companyName] = [];
        }
        acc[companyName].push(person);
      }
      return acc;
    },
    {}
  );

  const InActivePeople = people?.filter(
    (person) => !person?.checkInTime
  ).length;

  return (
    <div className="bg-white py-12 lg:py-24 sm:py-32 text-center">
      <h2 className="text-2xl font-bold text-secondary dark:text-primary ">
        Summary
      </h2>
      <div className="flex  justify-center align-middle wrap py-4">
        <p className="text-l text-secondary dark:text-primary w-full mt-1 me-1">
          <span className="text-indigo-500">
            People in the event right now:
          </span>{' '}
          {numberOfPeopleInEvent}
        </p>
        <p
          className="text-l text-secondary dark:text-primary whitespace-wrap mt-1 me-1 w-full"
          style={{ maxWidth: '350px' }}
        >
          <span className="text-indigo-500">
            People by company in the event right now:
          </span>{' '}
          {Object.keys(numberOfPeopleFromSameCompany ?? {}).map(
            (companyName) => (
              <span key={companyName}>
                {companyName} (
                {numberOfPeopleFromSameCompany?.[companyName]?.length ?? 0}),{' '}
              </span>
            )
          )}
        </p>
        <p className=" w-full text-l text-secondary dark:text-primary mt-1">
          <span className="text-indigo-500">People not checked-in:</span>{' '}
          {InActivePeople}
        </p>
      </div>
    </div>
  );
};

export default EventStats;
