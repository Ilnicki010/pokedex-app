import React, { useEffect } from 'react';
// import usePrevious from '../../hooks/usePrevious';

const Pagination = ({ activePage, allItems, getOffset }) => {
  const pages = [];
  for (let i = 1; i < Math.ceil(allItems / 50); i += 1) {
    pages.push(i);
  }
  const handleClick = (pageN) => {
    if (pageN !== 1) {
      getOffset(50 * pageN);
    } else {
      getOffset(0)
    }
  };

  return (
    <nav>
      <ul>
        {pages.map((i) => (
          <li>
            <button type="button" onClick={() => handleClick(i)}>
              {i}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
