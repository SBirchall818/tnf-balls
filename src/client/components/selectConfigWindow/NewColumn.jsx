import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import styles from './selectConfig-styles';
import NewSession from './NewSession';

const NewColumn = ({ newSession }) => (
  <div>
    <h4 className={css(styles.configColumnTitle)}>Start New</h4>
    <NewSession newSession={newSession} />
  </div>
);

NewColumn.propTypes = {
  newSession: PropTypes.func.isRequired,
};

export default NewColumn;
