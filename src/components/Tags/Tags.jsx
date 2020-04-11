import React from 'react';
import PropTypes from 'prop-types';

import { POKEMONS_TYPES } from '../../constants/index';

import styles from './Tags.module.scss';

function Tags({ typesList }) {
  const getColorByTag = (type) => {
    const result = POKEMONS_TYPES.find((el) => el.name === type);
    return result.color;
  };

  return (
    <ul className={styles.tagsList}>
      {typesList.map((type) => (
        <li key={type.type.name} className={styles.tag} style={{ background: getColorByTag(type.type.name) }}>
          {type.type.name}
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {};

export default Tags;
