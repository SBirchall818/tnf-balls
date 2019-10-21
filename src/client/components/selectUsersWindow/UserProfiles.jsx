import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import UserProfile from './UserProfile';


const UserProfiles = ({ history, users, setCurrentUser }) => (
  <>
    { users && users.map(u => (
      <UserProfile
        key={u.id}
        user={u}
        setUser={() => {
          setCurrentUser(u);
          history.push('/config');
        }}
      />
    )) }
  </>
);

UserProfiles.propTypes = {
  history: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

export default withRouter(UserProfiles);
