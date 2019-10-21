import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import UserProfilesHolder from './UserProfilesHolder';
import styles from './selectUser-styles';

const SelectUsersWindow = ({
  users, setCurrentUser, loadingUsers,
}) => (
  <div className={css(styles.root)}>
    <h3 className={css(styles.title)}>Select User Profile</h3>
    <div>
      <UserProfilesHolder isLoading={loadingUsers} {...{ users, setCurrentUser }} />
    </div>
  </div>
);

SelectUsersWindow.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  users: PropTypes.array,
  loadingUsers: PropTypes.bool.isRequired,
};

SelectUsersWindow.defaultProps = {
  users: [],
};

export default SelectUsersWindow;
