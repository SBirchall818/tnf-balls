import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getAvailableConfigs as getAvailableConfigsAction,
  loadConfig as loadConfigAction,
  newSession as newSessionAction,
} from '../actions';
import SelectConfigWindow from '../components/selectConfigWindow/SelectConfigWindow';

class ConfigScreen extends React.Component {
  componentDidMount() {
    const { getAvailableConfigs, user } = this.props;
    getAvailableConfigs(user.id);
  }

  render() {
    const {
      myBallConfigs,
      publicBallConfigs,
      loadConfig,
      newSession,
      user,
      loadingConfigs,
    } = this.props;
    return (
      <SelectConfigWindow
        myBallConfigs={myBallConfigs}
        publicBallConfigs={publicBallConfigs}
        loadConfig={loadConfig}
        newSession={newSession}
        user={user}
        loadingConfigs={loadingConfigs}
      />
    );
  }
}

ConfigScreen.propTypes = {
  myBallConfigs: PropTypes.array,
  publicBallConfigs: PropTypes.array,
  loadConfig: PropTypes.func.isRequired,
  newSession: PropTypes.func.isRequired,
  getAvailableConfigs: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loadingConfigs: PropTypes.bool.isRequired,
};

ConfigScreen.defaultProps = {
  myBallConfigs: [],
  publicBallConfigs: [],
};

const mapStateToProps = state => ({
  user: state.appReducer.user,
  myBallConfigs: state.appReducer.myBallConfigs,
  publicBallConfigs: state.appReducer.publicBallConfigs,
  loadingConfigs: state.configReducer.loadingConfigs,
});

const mapDispatchToProps = {
  getAvailableConfigs: getAvailableConfigsAction,
  loadConfig: loadConfigAction,
  newSession: newSessionAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigScreen);
