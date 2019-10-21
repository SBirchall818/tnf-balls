import React from 'react';
import { css } from 'aphrodite';
import styles from './selectConfig-styles';

const ConfigHeader = () => (
  <div className={css(styles.header)}>
    <h3>Select Config</h3>
  </div>
);

export default ConfigHeader;
