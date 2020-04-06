import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Element({ pokemon }) {
  const [pokemonDetals, setPokemonDetails] = useState(null);

  useEffect(() => {
    Axios.get(pokemon.url).then((data) => setPokemonDetails(data.data));
    return setPokemonDetails(null);
  }, [pokemon]);

  return (
    <li>
      {pokemonDetals && (
        <div>
          <img
            src={pokemonDetals.sprites.front_default}
            width="100px"
            height="100px"
            alt={`${pokemonDetals.name} pokemon.`}
          />
          <span>{pokemon.name}</span>
        </div>
      )}
    </li>
  );
}
