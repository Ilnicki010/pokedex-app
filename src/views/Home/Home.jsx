import React, { useEffect, useState } from 'react';

import usePokemonApi from '../../hooks/usePokemonApi';

import List from '../../components/List/List';
import Pagination from '../../components/Pagination/Pagination';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const [
    {
      data: pokemonsList,
      isLoading,
      error: { value: errorValue, message: errorMessage },
    },
    doFetch,
  ] = usePokemonApi();

  useEffect(() => {
    doFetch(`${process.env.REACT_APP_API_URL}/pokemon?limit=50`);
  }, [doFetch]);

  useEffect(() => {
    doFetch(`${process.env.REACT_APP_API_URL}/pokemon?offset=${currentPage}&limit=50`);
  }, [currentPage]);

  return (
    <main>
      {errorValue && <span>Somthing went wrong... error message: {errorMessage}</span>}
      <header>
        <h1>All Pokemons</h1>
      </header>
      {currentPage}
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <section>
          <List pokemons={pokemonsList} />
          <Pagination
            allItems={pokemonsList.count}
            getOffset={(offset) => setCurrentPage(offset)}
            maxPerPage={70}
          />
        </section>
      )}
    </main>
  );
}
