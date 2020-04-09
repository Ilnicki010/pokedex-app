import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


import styles from './Element.module.scss';
import Tags from '../../Tags/Tags';

export default function Element({ pokemon }) {
  const [pokemonDetals, setPokemonDetails] = useState(null);

  useEffect(() => {
    Axios.get(pokemon.url).then((data) => setPokemonDetails(data.data));
    return setPokemonDetails(null);
  }, [pokemon]);


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
            <Tags typesList={pokemonDetals.types}/>
          </div>
          </Link>
        </li>
      )}
    </>
  );
}
