import React from 'react';
import { Meteor } from 'meteor/meteor';

const PersonStatus = ({
  _id,
  checkInTime,
  readyForCheckout,
  firstName,
  lastName,
}: PersonDocument) => {
  const checkInHandler = async (personId: string) => {
    const data = await Meteor.callAsync('addPersonForEvent', personId);
    console.log(data);
  };

  const checkoutHandler = async (personId: string) => {
    const data = await Meteor.callAsync('removePersonFromEvent', personId);
    console.log(data);
  };
  return (
    <div className="min-w-0">
      <div className="flex items-start gap-x-3">
        <div className="flex flex-none items-center gap-x-4">
          {checkInTime && readyForCheckout && (
            <button
              onClick={() => checkoutHandler(_id)}
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 hover:text-white w-56 sm:block"
            >
              {`Check-out ${firstName} ${lastName}`}
            </button>
          )}
          {!checkInTime ? (
            <button
              disabled={checkInTime != null || checkInTime != undefined}
              onClick={() => checkInHandler(_id)}
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-400 hover:text-white disabled:bg-slate-100 disabled:text-gray-500 w-56 sm:block"
            >
              {`Check-in ${firstName} ${lastName}`}
            </button>
          ) : (
            !readyForCheckout && <p>{`${firstName} ${lastName}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonStatus;
