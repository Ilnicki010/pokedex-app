import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {POKEMONS_TYPES} from '../../../constants/index'

import styles from './Element.module.scss';

export default function Element({ pokemon }) {
  const [pokemonDetals, setPokemonDetails] = useState(null);

  useEffect(() => {
    Axios.get(pokemon.url).then((data) => setPokemonDetails(data.data));
    return setPokemonDetails(null);
  }, [pokemon]);

  const getColorByTag = (type) => {
    const result = POKEMONS_TYPES.find((el) => el.name === type);
    return result.color
    
  }

  return (
    <>
      {pokemonDetals && (
        <li className={styles.elementWrapper}>
          <img
            src={pokemonDetals.sprites.front_default}
            width="100px"
            height="100px"
            alt={`${pokemonDetals.name} pokemon`}
          />
          <div className={styles.content}>
            <span className={styles.name}>{pokemon.name}</span>
            <span className={styles.xpPoints}>{pokemonDetals.base_experience} xp</span>
            <ul className={styles.tagsList}>
              {
                pokemonDetals.types.map(type => (
                <li className={styles.tag} style={{background:getColorByTag(type.type.name)}}>{type.type.name}</li>
                ))
              }
            </ul>
          </div>
        </li>
      )}
    </>
  );
}
