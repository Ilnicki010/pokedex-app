import React from 'react';
import PropTypes from 'prop-types';

import { POKEMONS_TYPES } from '../../constants/index';

import styles from './Filters.module.scss';

export default function Filters({ getFiltredArray }) {
  const handleFilterChange = (e) => {
    getFiltredArray(e.target.value);
  };

  return (
    <label htmlFor="typeFilter" className={styles.label}>
      Filter by type
      <select
        id="typeFilter"
        name="typesFilter"
        onChange={handleFilterChange}
        className={styles.selectFilter}
      >
        <option value="all">all</option>
        {POKEMONS_TYPES.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </label>
  );
}

Filters.propTypes = {
  getFiltredArray: PropTypes.func.isRequired,
};
