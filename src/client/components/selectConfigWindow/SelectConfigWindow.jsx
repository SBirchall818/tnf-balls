import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ConfigHeader from './ConfigHeader';
import PanelGroup from './PanelGroup';

const SelectConfigWindow = ({
  history, myBallConfigs, publicBallConfigs, loadConfig, newSession, user, loadingConfigs,
}) => (
  <>
    <ConfigHeader />
    <PanelGroup
      myBallConfigs={myBallConfigs}
      publicBallConfigs={publicBallConfigs}
      loadConfig={({ configId, userId }) => {
        const cb = () => history.push('/balls');
        loadConfig({ configId, userId, cb });
      }}
      newSession={newSession}
      userId={user.id}
      loadingConfigs={loadingConfigs}
    />
  </>
);

SelectConfigWindow.propTypes = {
  history: PropTypes.object.isRequired,
  myBallConfigs: PropTypes.array,
  publicBallConfigs: PropTypes.array,
  loadConfig: PropTypes.func.isRequired,
  newSession: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loadingConfigs: PropTypes.bool.isRequired,
};

SelectConfigWindow.defaultProps = {
  myBallConfigs: [],
  publicBallConfigs: [],
};

export default withRouter(SelectConfigWindow);
