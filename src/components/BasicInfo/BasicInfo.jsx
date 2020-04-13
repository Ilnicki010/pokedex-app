import React from 'react';
import PropTypes from 'prop-types';

import styles from './BasicInfo.module.scss';

import { BASIC_TABLE_TEXTS } from '../../constants/index';

function BasicInfo({ baseXp, weight, height }) {
  return (
    <table className={styles.infoTable} summary={BASIC_TABLE_TEXTS.tableSummary}>
      <caption />
      <colgroup span="3" />
      <thead>
        <tr>
          <th className={styles.infoTableTh} scope="col">
            {BASIC_TABLE_TEXTS.baseXpHeader}
          </th>
          <th className={styles.infoTableTh} scope="col">
            {BASIC_TABLE_TEXTS.weightHeader}
          </th>
          <th className={styles.infoTableTh} scope="col">
            {BASIC_TABLE_TEXTS.heightHeader}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.infoTableTd}>{baseXp}</td>
          <td className={styles.infoTableTd}>{weight}</td>
          <td className={styles.infoTableTd}>{height}</td>
        </tr>
      </tbody>
    </table>
  );
}

BasicInfo.propTypes = {
  baseXp: PropTypes.number,
  weight: PropTypes.number,
  height: PropTypes.number,
};

BasicInfo.defaultProps = {
  baseXp: 0,
  weight: 0,
  height: 0,
};

export default BasicInfo;
