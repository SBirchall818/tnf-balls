import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './saveButton-styles';

const ChangeConfigButton = ({ history, changeConfig }) => (
  <button
    type="button"
    className={css(styles.root)}
    onClick={() => {
      history.push('/config');
      changeConfig();
    }}
  >
    Change Config
  </button>
);

ChangeConfigButton.propTypes = {
  history: PropTypes.object.isRequired,
  changeConfig: PropTypes.func.isRequired,
};

export default withRouter(ChangeConfigButton);
