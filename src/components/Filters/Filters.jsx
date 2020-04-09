import React from 'react';
import { POKEMONS_TYPES } from '../../constants/index';

import styles from './Filters.module.scss';

export default function Filters({ getFiltredArray }) {
  const handleFilterChange = (e) => {
    getFiltredArray(e.target.value);
  };

  return (
    <select name="example" onChange={handleFilterChange} className={styles.selectFilter}>
      <option value="all">all</option>
      {POKEMONS_TYPES.map((el) => (
        <option value={el.id}>{el.name}</option>
      ))}
    </select>
  );
}
