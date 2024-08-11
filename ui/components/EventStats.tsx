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

  const stats = [
    {
      id: 1,
      name: 'People in the event right now',
      value: numberOfPeopleInEvent,
    },
    { id: 3, name: 'People not checked in', value: InActivePeople },
  ];

  return (
    <div className="bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-1 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-1 gap-y-1 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-1"
            >
              <dt className="text-sm lg:text-base leading-7 text-gray-600">
                {stat.name}
              </dt>
              <dd className="order-first lg:text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
          {Object.keys(numberOfPeopleFromSameCompany ?? {}).map(
            (companyName) => (
              <div
                key={companyName}
                className="mx-auto flex max-w-xs flex-col gap-y-1"
              >
                <dt className="text-sm lg:text-base leading-7 text-gray-600">
                  {`People from ${companyName} Company`}
                </dt>
                <dd className="order-first lg:text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {numberOfPeopleFromSameCompany?.[companyName]?.length ?? 0}
                </dd>
              </div>
            )
          )}
        </dl>
      </div>
    </div>
  );
};

export default EventStats;
