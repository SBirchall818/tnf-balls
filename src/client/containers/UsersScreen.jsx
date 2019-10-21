import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getUsers as getUsersAction,
  setCurrentUser as setCurrentUserAction,
} from '../actions';
import SelectUsersWindow from '../components/selectUsersWindow/SelectUsersWindow';

class UsersScreen extends React.Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users, setCurrentUser, loadingUsers } = this.props;
    return (
      <>
        <SelectUsersWindow
          users={users}
          setCurrentUser={setCurrentUser}
          loadingUsers={loadingUsers}
        />
      </>
    );
  }
}

UsersScreen.propTypes = {
  getUsers: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  users: PropTypes.array,
  loadingUsers: PropTypes.bool.isRequired,
};

UsersScreen.defaultProps = {
  users: [],
};

const mapStateToProps = state => ({
  users: state.appReducer.users,
  loadingUsers: state.userReducer.loadingUsers,
});

const mapDispatchToProps = {
  getUsers: getUsersAction,
  setCurrentUser: setCurrentUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
