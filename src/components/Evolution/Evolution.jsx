import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import styles from './Evolution.module.scss';

function Evolution({ specieUrl }) {
  const [specieInfo, setSpecieInfo] = useState(null);

  useEffect(() => {
    Axios.get(specieUrl).then((data) => {
      setSpecieInfo(data.data);
    });
  }, [specieUrl]);

  const getEnglishText = (flavorTextArray) => {
    return flavorTextArray.find((el) => el.language.name === 'en');
  };

  return (
    <>
      {specieInfo && (
        <article>
          <p>{getEnglishText(specieInfo.flavor_text_entries).flavor_text}</p>
          <p>
            Evolutes from{' '}
            <span className={styles.specialText}>{specieInfo.evolves_from_species.name || ''}</span>
          </p>
        </article>
      )}
    </>
  );
}

Evolution.propTypes = {
  specieUrl: PropTypes.string.isRequired,
};

export default Evolution;
