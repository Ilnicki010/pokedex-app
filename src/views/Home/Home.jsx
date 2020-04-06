import React, { useEffect, useState } from 'react';

import { useUpdateEffect } from 'react-use';

import List from '../../components/List/List';

import usePokemonApi from '../../hooks/usePokemonApi';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const [
    {
      data: pokemonsList,
      isLoading,
      error: { value: errorValue, message: errorMessage },
    },
    doFetch,
  ] = usePokemonApi();

  useEffect(() => {
    doFetch(`${process.env.REACT_APP_API_URL}/pokemon?limit=20`);
  }, [doFetch]);

  useUpdateEffect(() => {
    doFetch(pokemonsList.next);
  }, [currentPage]);

  const moveForwards = () => {
    setCurrentPage((page) => page + 1);
  };
  const moveBackwards = () => {
    setCurrentPage((page) => page - 1);
  };

  return (
    <main>
      {errorValue && <span>Somthing went wrong... error message: {errorMessage}</span>}
      <header>
        <h1>All Pokemons</h1>
        {currentPage}
        {isLoading ? <span>loading...</span> : <List pokemons={pokemonsList} />}
      </header>
      <section>
        <button type="button" onClick={moveForwards}>
          next
        </button>
        <button type="button" onClick={moveBackwards}>
          previous
        </button>
      </section>
    </main>
  );
}
