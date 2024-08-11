import React from 'react';
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  previousPageHandler: () => void;
  nextPageHandler: () => void;
};
const Pagination = ({
  currentPage,
  totalPages,
  previousPageHandler,
  nextPageHandler,
}: PaginationProps) => (
  <nav
    aria-label="Pagination"
    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div className="hidden sm:block">
      <p className="text-sm text-gray-700">
        {currentPage} of {totalPages}
      </p>
    </div>
    <div className="flex flex-1 justify-between sm:justify-end">
      <button
        type="button"
        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        onClick={previousPageHandler}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        type="button"
        disabled={currentPage === totalPages}
        className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        onClick={nextPageHandler}
      >
        Next
      </button>
    </div>
  </nav>
);

export default Pagination;
