import React from 'react';

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
    if (calculatedOffset <= pagesNumber * maxPerPage - maxPerPage)
      getOffset(calculatedOffset);
  };

  const moveBackwards = () => {
    const calculatedOffset = activePage - maxPerPage;
    if (calculatedOffset >= 0) getOffset(calculatedOffset);
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.element}>
          <button className={styles.button} onClick={moveBackwards} type="button">
            Prev
          </button>
        </li>
        {pages.map((i) => (
          <li className={styles.element}>
            <button className={styles.button} type="button" onClick={() => handleClick(i)}>
              {i}
            </button>
          </li>
        ))}
        <li className={styles.element}>
          <button className={styles.button} onClick={moveForwards} type="button">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
