import React from 'react';

interface PaginationProps {
  previousPage: () => void;
  nextPage: () => void;
  disableFirst: boolean;
  disableLast: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  previousPage,
  nextPage,
  disableFirst,
  disableLast,
}) => {
  return (
    <nav aria-label="Page navigation example" className="align-right my-5">
      <ul className="flex items-center justify-between text-base">
        <li onClick={previousPage}>
          <a
            href="#"
            className="bar flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 border-gray-300 bg-white border hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li onClick={nextPage}>
          <a
            href="#"
            className="bar flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
