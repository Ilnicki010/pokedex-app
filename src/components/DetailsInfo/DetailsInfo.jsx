import React from 'react';
import PropTypes from 'prop-types';

import styles from './DetailsInfo.module.scss';

import { DETAILS_TABLE_TEXTS } from '../../constants/index';

function DetailsInfo({ abilities, moves }) {
  return (
    <table className={styles.infoTable} summary={DETAILS_TABLE_TEXTS.tableSummary}>
      <tbody>
        <tr>
          <th className={styles.infoTableTh} colSpan="5" scope="colgroup">
            {DETAILS_TABLE_TEXTS.abilitiesHeader} ({abilities.length})
          </th>
        </tr>
        {abilities.map((el) => (
          <tr key={el.ability.name}>
            <td className={styles.infoTableTd}> {el.ability.name}</td>
          </tr>
        ))}
        <tr>
          <th className={styles.infoTableTh} colSpan="5" scope="colgroup">
            {DETAILS_TABLE_TEXTS.movesHeader} ({moves.length})
          </th>
        </tr>
        {moves.map((el) => (
          <tr key={el.move.name}>
            <td className={styles.infoTableTd}>{el.move.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

DetailsInfo.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })),
  moves: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })),
};

DetailsInfo.defaultProps = {
  abilities: [{ ability: { name: 'none' }, is_hidden: false, slot: 1 }],
  moves: [{ move: { name: 'none' }, version_group_details: [] }],
};

export default DetailsInfo;
