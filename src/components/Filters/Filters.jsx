import React, { useState } from 'react';
import { POKEMONS_TYPES } from '../../constants/index';

import styles from './Filters.module.scss';

export default function Filters({ getFiltredArray }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const submitFilter = (e) =>{
      e.preventDefault();
      getFiltredArray(selectedFilter)
  }
  
  return (
    <form onSubmit={submitFilter} className={styles.filterWrapper}>
      <select name="example" onChange={handleFilterChange} value={selectedFilter} className={styles.selectFilter}>
        <option value='all'>all</option>
        {POKEMONS_TYPES.map((el) => (
          <option value={el.id}>{el.name}</option>
        ))}
      </select>
      <button className={styles.button} type="submit">Filter</button>
    </form>
  );
}
