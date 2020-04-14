import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';

import styles from './SinglePokemon.module.scss';

import Tags from '../../components/Tags/Tags';
import Button from '../../components/Button/Button';
import SpecieInfo from '../../components/SpecieInfo/SpecieInfo';
import BasicInfo from '../../components/BasicInfo/BasicInfo';
import DetailsInfo from '../../components/DetailsInfo/DetailsInfo';

import { SINGLE_POKEMON_TEXTS, API_URL } from '../../constants/index';

export default function SinglePokemon() {
  const { id } = useParams();
  const history = useHistory();
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    Axios.get(`${API_URL}/pokemon/${id}`).then((data) => {
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
              <BasicInfo
                baseXp={currentPokemon.base_experience}
                height={currentPokemon.height}
                weight={currentPokemon.weight}
              />
            </section>
            <section>
              <h2>{SINGLE_POKEMON_TEXTS.allHeader}</h2>
              <DetailsInfo moves={currentPokemon.moves} abilities={currentPokemon.abilities} />
            </section>
          </div>
        </>
      ) : (
        <span>loading...</span>
      )}
    </main>
  );
}
