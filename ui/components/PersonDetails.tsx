import React from 'react';
import { format } from 'date-fns';

const PersonDetails = ({
  checkInTime,
  checkOutTime,
  readyForCheckout,
  companyName,
  title,
}: PersonDocument) => {
  return (
    <>
      {checkInTime && readyForCheckout && (
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">
            {`Company: ${companyName || 'Not Available'}`}
          </p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <p className="whitespace-nowrap">
            {`Title: ${title || 'Not Available'}`}
          </p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <p className="whitespace-nowrap">
            Check-in Date on:{' '}
            <time dateTime={format(checkInTime, 'MM/dd/yyy, HH:mm')}>
              {format(checkInTime, 'MM/dd/yyy, HH:mm')}
            </time>
          </p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          <p className="whitespace-nowrap">
            Check-out Date on:{' '}
            {checkOutTime ? (
              <time dateTime={format(checkOutTime, 'MM/dd/yyy, HH:mm')}>
                {format(checkOutTime, 'MM/dd/yyy, HH:mm')}
              </time>
            ) : (
              'NA'
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default PersonDetails;
