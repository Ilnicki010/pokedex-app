import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

import { POKEMONS_TYPES } from '../../../constants/index';

import styles from './Element.module.scss';

export default function Element({ pokemon }) {
  const [pokemonDetals, setPokemonDetails] = useState(null);

  useEffect(() => {
    Axios.get(pokemon.url).then((data) => setPokemonDetails(data.data));
    return setPokemonDetails(null);
  }, [pokemon]);

  const getColorByTag = (type) => {
    const result = POKEMONS_TYPES.find((el) => el.name === type);
    return result.color;
  };

  return (
    <>
      {pokemonDetals && (
        <li>
          <Link className={styles.elementWrapper} to={`pokemon/${pokemonDetals.id}`}>
          <img
            src={
              pokemonDetals.sprites.front_default
                ? pokemonDetals.sprites.front_default
                : 'https://via.placeholder.com/100'
            }
            width="100px"
            height="100px"
            alt={`${pokemonDetals.name} pokemon`}
          />
          <div className={styles.content}>
            <span className={styles.name}>{pokemon.name}</span>
            <span className={styles.xpPoints}>{pokemonDetals.base_experience} xp</span>
            <ul className={styles.tagsList}>
              {pokemonDetals.types.map((type) => (
                <li
                  key={type.type.name}
                  className={styles.tag}
                  style={{ background: getColorByTag(type.type.name) }}
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          </Link>
        </li>
      )}
    </>
  );
}
