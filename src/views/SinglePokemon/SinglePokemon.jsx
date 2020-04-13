import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';

import styles from './SinglePokemon.module.scss';

import Tags from '../../components/Tags/Tags';
import Button from '../../components/Button/Button';
import SpecieInfo from '../../components/SpecieInfo/SpecieInfo';

import { SINGLE_POKEMON_TEXTS } from '../../constants/index';

export default function SinglePokemon() {
  const { id } = useParams();
  const history = useHistory();
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/pokemon/${id}`).then((data) => {
      setCurrentPokemon(data.data);
    });
  }, [id]);

  return (
    <main className={styles.wrapper}>
      {currentPokemon ? (
        <>
          <nav>
            <Button
              secondary
              onClick={() => {
                history.goBack();
              }}
            >
              {SINGLE_POKEMON_TEXTS.backButton}
            </Button>
          </nav>
          <header className={styles.mainHeader}>
            <div className={styles.image}>
              <img
                src={
                  currentPokemon.sprites.front_default
                    ? currentPokemon.sprites.front_default
                    : 'https://via.placeholder.com/200'
                }
                width="200px"
                height="200px"
                alt={`${currentPokemon.name} pokemon`}
              />
            </div>
            <h1 className={styles.name}>{currentPokemon.name}</h1>
            <Tags typesList={currentPokemon.types} />
          </header>
          <div className={styles.content}>
            <section>
              <h2>{SINGLE_POKEMON_TEXTS.aboutHeader}</h2>
              <SpecieInfo specieUrl={currentPokemon.species.url} />
            </section>
            <section>
              <h2>{SINGLE_POKEMON_TEXTS.baseHeader}</h2>
              <table>
                <caption />
                <colgroup span="3" />
                <thead>
                  <tr>
                    <th scope="col">Base xp</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Height</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{currentPokemon.base_experience}</td>
                    <td>{currentPokemon.weight}</td>
                    <td>{currentPokemon.height}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section>
              <h2>{SINGLE_POKEMON_TEXTS.allHeader}</h2>
              <table summary="Column one has the location and size of accommodation, other columns show the type and number of properties available">
                <caption />
                <tbody>
                  <tr>
                    <th colSpan="5" scope="colgroup">
                      Abilities ({currentPokemon.abilities.length})
                    </th>
                  </tr>
                  {currentPokemon.abilities.map((el) => (
                    <tr key={el.ability.name}>
                      <td>{el.ability.name}</td>
                    </tr>
                  ))}
                  <tr>
                    <th colSpan="5" scope="colgroup">
                      Moves ({currentPokemon.moves.length})
                    </th>
                  </tr>
                  {currentPokemon.moves.map((el) => (
                    <tr key={el.move.name}>
                      <td>{el.move.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </>
      ) : (
        <span>loading...</span>
      )}
    </main>
  );
}
