import React from 'react';

interface PaginationProps {
  previousPage: () => void;
  nextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ previousPage, nextPage }) => {
  return (
    <nav aria-label="Page navigation example" className="align-right my-5">
      <ul className="flex items-center text-base">
        <li onClick={previousPage}>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li onClick={nextPage}>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
