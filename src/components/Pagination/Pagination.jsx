import React from 'react';

import styles from './Pagination.module.scss';

const Pagination = ({ activePage, allItems, getOffset, maxPerPage }) => {
  const pages = [];
  for (let i = 1; i < Math.ceil(allItems / maxPerPage); i += 1) {
    pages.push(i);
  }
  const handleClick = (pageN) => {
    if (pageN !== 1) {
      getOffset(maxPerPage * pageN);
    } else {
      getOffset(0);
    }
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {pages.map((i) => (
          <li className={styles.element}>
            <button className={styles.button} type="button" onClick={() => handleClick(i)}>
              {i}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
