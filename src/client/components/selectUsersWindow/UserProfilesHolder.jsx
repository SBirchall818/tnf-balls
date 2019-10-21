import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import UserProfiles from './UserProfiles';
import styles from './selectUser-styles';
import withLoading from '../hoc/withLoading';

const UserProfilesWithLoading = withLoading(UserProfiles);

const UserProfilesHolder = ({ users, setCurrentUser, isLoading }) => (
  <div className={css(styles.profileContainer)}>
    <UserProfilesWithLoading {...{ users, setCurrentUser, isLoading }} />
  </div>
);

UserProfilesHolder.propTypes = {
  users: PropTypes.array,
  setCurrentUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

UserProfilesHolder.defaultProps = {
  users: [],
};

export default UserProfilesHolder;
