import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import styles from './selectUser-styles';

const UserProfile = ({ user, setUser }) => (
  <div className={css(styles.profile)} onClick={setUser}>
    <FontAwesomeIcon className={css(styles.icon)} icon={faUser} size="4x" />
    <p>{user.username}</p>
  </div>
);

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default UserProfile;
