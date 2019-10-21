import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './selectConfig-styles';

const NewSession = ({ history, newSession }) => (
  <div className={css(styles.newSession)}>
    <h4
      className={css(styles.newSessionText)}
      onClick={() => {
        newSession();
        history.push('/balls');
      }}
    >
      NEW
    </h4>
  </div>
);

NewSession.propTypes = {
  history: PropTypes.object.isRequired,
  newSession: PropTypes.func.isRequired,
};

export default withRouter(NewSession);
