import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './saveButton-styles';

const ChangeUserButton = ({ changeUser, history }) => (
  <button
    type="button"
    className={css(styles.root)}
    onClick={() => {
      history.push('/');
      changeUser();
    }}
  >
    Change User
  </button>
);

ChangeUserButton.propTypes = {
  history: PropTypes.object.isRequired,
  changeUser: PropTypes.func.isRequired,
};

export default withRouter(ChangeUserButton);
