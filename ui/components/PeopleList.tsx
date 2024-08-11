import React, { useEffect, useState } from 'react';
import Button from './Button';
import { Meteor } from 'meteor/meteor';

type PeopleListProps = {
  people: PersonDocument[] | undefined;
};
const PeopleList = ({ people }: PeopleListProps) => {
  console.log(people);
  // const [checkInTimes, setCheckInTimes] = useState<{ [key: string]: Date }>();

  // useEffect(() => {
  //   const initialCheckInTimes = people?.reduce(
  //     (acc: { [key: string]: Date }, person) => {
  //       if (person.checkInTime) {
  //         acc[person._id] = new Date(person.checkInTime);
  //       }
  //       return acc;
  //     },
  //     {},
  //   );

  //   setCheckInTimes(initialCheckInTimes);
  // }, [people]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCheckInTimes((prevTimes) => ({ ...prevTimes }));
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const checkInHandler = async (personId: string) => {
    const data = await Meteor.callAsync('addPersonForEvent', personId);
    console.log(data);
  };

  const checkoutHandler = (personId: string) => {
    Meteor.call('removePersonFromEvent', personId, () => {
      // setCheckInTimes({
      //   ...checkInTimes,
      //   [personId]: new Date(),
      // });
    });
  };

  // const isCheckedInOverFiveSeconds = (personId: string) => {
  //   const checkInDate = checkInTimes?.[personId] ?? null;
  //   if (!checkInDate) return false;
  //   const fiveSecondsAgo = new Date(Date.now() - 5000);
  //   console.log('fdfd', fiveSecondsAgo < checkInDate);
  //   return fiveSecondsAgo < checkInDate;
  // };

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
                {person.firstName} {person.lastName}
              </p>
            </div>
            {person.checkInTime && person.readyForCheckout && (
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">
                  checkInDate on{' '}
                  <time dateTime={person.checkInTime}>
                    {person.checkInTime}
                  </time>
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <p className="truncate">Created by {person.createdBy}</p>
              </div>
            )}
          </div>
          <div className="flex flex-none items-center gap-x-4">
            {person.checkInTime && person.readyForCheckout && (
              <Button
                onClick={() => checkoutHandler(person._id)}
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 hover:text-white w-32 sm:block"
              >
                Check Out
              </Button>
            )}
            {!person.checkInTime && (
              <Button
                onClick={() => checkInHandler(person._id)}
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
