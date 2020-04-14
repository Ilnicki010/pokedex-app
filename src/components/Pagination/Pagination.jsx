import React from 'react';

import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

const Pagination = ({ activePage, allItems, getOffset, maxPerPage }) => {
  const pages = [];
  const pagesNumber = Math.ceil(allItems / maxPerPage);
  for (let i = 1; i <= pagesNumber; i += 1) {
    pages.push(i);
  }
  const handleClick = (pageN) => {
    if (pageN === 1) {
      getOffset(0);
    } else {
      getOffset(maxPerPage * pageN - maxPerPage);
    }
  };

  const moveForwards = () => {
    const calculatedOffset = activePage + maxPerPage;
    if (calculatedOffset <= pagesNumber * maxPerPage - maxPerPage) getOffset(calculatedOffset);
  };

  const moveBackwards = () => {
    const calculatedOffset = activePage - maxPerPage;
    if (calculatedOffset >= 0) getOffset(calculatedOffset);
  };

  const activePageIndex = (activePage + maxPerPage) / maxPerPage;

  return (
    <nav className={styles.wrapper}>
      <ul data-testid="pagesList" className={styles.list}>
        <li className={styles.element}>
          <button
            data-testid="prevButton"
            className={styles.buttonSpecial}
            onClick={moveBackwards}
            type="button"
          >
            Prev
          </button>
        </li>
        {pages.map((i) => (
          <li key={i} className={activePageIndex === i ? styles.elementActive : styles.element}>
            <button className={styles.button} type="button" onClick={() => handleClick(i)}>
              {i}
            </button>
          </li>
        ))}
        <li className={styles.element}>
          <button
            data-testid="nextButton"
            className={styles.buttonSpecial}
            onClick={moveForwards}
            type="button"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  allItems: PropTypes.number.isRequired,
  getOffset: PropTypes.func.isRequired,
  maxPerPage: PropTypes.number.isRequired,
};
export default Pagination;
