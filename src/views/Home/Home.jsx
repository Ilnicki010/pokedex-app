import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import List from '../../components/List/List';
import Pagination from '../../components/Pagination/Pagination';
import Filters from '../../components/Filters/Filters';

import { SERVER_ERROR_MESSAGE } from '../../constants/index';

export default function Home() {
  const MAX_PER_PAGE = 50;

  const [currentOffset, setCurrentOffset] = useState(0);
  const [filterId, setFilterId] = useState('all');
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (filterId === 'all') {
      Axios.get(`${process.env.REACT_APP_API_URL}/pokemon?offset=${currentOffset}&limit=${MAX_PER_PAGE}`)
        .then((data) => {
          setPokemons({ pokemons: data.data.results, count: data.data.count });
        })
        .catch((err) => setError(SERVER_ERROR_MESSAGE));
    } else {
      Axios.get(`${process.env.REACT_APP_API_URL}/type/${filterId}`)
        .then((data) => {
          const formattedPokemons = [];
          data.data.pokemon.map((el) => formattedPokemons.push(el.pokemon));
          setPokemons({
            pokemons: formattedPokemons.slice(currentOffset, currentOffset + MAX_PER_PAGE),
            count: formattedPokemons.length,
          });
        })
        .catch((err) => setError(SERVER_ERROR_MESSAGE));
    }
  }, [currentOffset, filterId]);

  useEffect(() => {
    setCurrentOffset(0);
  }, [filterId]);

  return (
    <main>
      {error && <span>Somthing went wrong... error message: {error}</span>}
      <header>
        <h1>All Pokemons</h1>
      </header>
      <Filters getFiltredArray={(id) => setFilterId(id)} />
      {pokemons ? (
        <section>
          <Pagination
            allItems={pokemons.count}
            getOffset={(offset) => setCurrentOffset(offset)}
            maxPerPage={MAX_PER_PAGE}
            activePage={currentOffset}
          />

          <List pokemons={pokemons.pokemons} />
        </section>
      ) : (
        <span>loading...</span>
      )}
    </main>
  );
}
