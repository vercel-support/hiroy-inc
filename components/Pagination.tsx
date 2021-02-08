import React from "react";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: any;
  currentPage: number;
  className: string;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  className
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={className ? "mi-pagination " + className : "mi-pagination"}>
      <ul>
        {currentPage === 1 ? null : (
          <li>
            <a onClick={e => paginate(e, currentPage - 1)} href="!#">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          </li>
        )}
        {pageNumbers.map(number => (
          <li
            key={number}
            className={currentPage === number ? "is-active" : ''}
          >
            <a onClick={e => paginate(e, number)} href="!#">
              {number}
            </a>
          </li>
        ))}
        {currentPage === pageNumbers[pageNumbers.length - 1] ? null : (
          <li>
            <a onClick={e => paginate(e, currentPage + 1)} href="!#">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
