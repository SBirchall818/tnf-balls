import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import styles from './saveButton-styles';
import { NEW_MODE } from '../../consts/modes';

const SaveButton = ({ saveConfig, mode }) => {
  const disabled = mode !== NEW_MODE;
  return (
    <button
      type="button"
      className={css(styles.root, disabled && styles.disabled)}
      onClick={() => {
        console.log('clicked save config');
        if (!disabled) saveConfig();
      }}
    >
        Save Config
    </button>
  );
};

SaveButton.propTypes = {
  saveConfig: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default SaveButton;
