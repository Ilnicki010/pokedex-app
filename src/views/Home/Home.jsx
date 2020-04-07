import React, { useEffect, useState } from 'react';

import usePokemonApi from '../../hooks/usePokemonApi';

import List from '../../components/List/List';
import Pagination from '../../components/Pagination/Pagination';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const [
    {
      data: { count: pokemonsCount, results: pokemonsList },
      isLoading,
      error: { value: errorValue, message: errorMessage },
    },
    doFetch,
  ] = usePokemonApi();

  useEffect(() => {
    doFetch(`${process.env.REACT_APP_API_URL}/pokemon?limit=200`);
  }, [doFetch]);

  useEffect(() => {
    doFetch(`${process.env.REACT_APP_API_URL}/pokemon?offset=${currentPage}&limit=200`);
  }, [currentPage]);

  return (
    <main>
      {errorValue && <span>Somthing went wrong... error message: {errorMessage}</span>}
      <header>
        <h1>All Pokemons</h1>
      </header>
      {currentPage}
      <Pagination
        allItems={pokemonsCount}
        getOffset={(offset) => setCurrentPage(offset)}
        maxPerPage={200}
        activePage={currentPage}
      />
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <section>
          <List pokemons={pokemonsList} />
        </section>
      )}
    </main>
  );
}
