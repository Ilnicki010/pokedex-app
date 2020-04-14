import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { SPECIE_INFO_TEXTS } from '../../constants';

import styles from './SpecieInfo.module.scss';

function Evolution({ specieUrl }) {
  const [specieInfo, setSpecieInfo] = useState(null);

  useEffect(() => {
    let isMounted = true;
    Axios.get(specieUrl).then((data) => {
      if (isMounted) setSpecieInfo(data.data);
    });
    return () => {
      isMounted = false;
    };
  }, [specieUrl]);

  const getEnglishText = (flavorTextArray) => {
    return flavorTextArray.find((el) => el.language.name === 'en');
  };

  return (
    <>
      {specieInfo && (
        <article>
          <p data-testid="specieDescription">{getEnglishText(specieInfo.flavor_text_entries).flavor_text}</p>
          {specieInfo.evolves_from_species ? (
            <p data-testid="evolutionText">
              {SPECIE_INFO_TEXTS.evolutesFrom}
              <span className={styles.specialText}> {specieInfo.evolves_from_species.name}</span>
            </p>
          ) : (
            <p data-testid="evolutionText">{SPECIE_INFO_TEXTS.firstEvolutionStage}</p>
          )}
        </article>
      )}
    </>
  );
}

Evolution.propTypes = {
  specieUrl: PropTypes.string.isRequired,
};

export default Evolution;
