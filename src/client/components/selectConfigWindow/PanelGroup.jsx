import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import ConfigColumn from './ConfigColumn';
import NewColumn from './NewColumn';
import styles from './selectConfig-styles';

const PanelGroup = ({
  myBallConfigs, publicBallConfigs, loadConfig, newSession, userId, loadingConfigs,
}) => (
  <div className={css(styles.panelGroup)}>
    <ConfigColumn title="My Configs" list={myBallConfigs} loadConfig={loadConfig} userId={userId} loadingConfigs={loadingConfigs} />
    <ConfigColumn title="Public Configs" list={publicBallConfigs} loadConfig={loadConfig} userId={userId} loadingConfigs={loadingConfigs} />
    <NewColumn newSession={newSession} />
  </div>
);

PanelGroup.propTypes = {
  myBallConfigs: PropTypes.array.isRequired,
  publicBallConfigs: PropTypes.array.isRequired,
  loadConfig: PropTypes.func.isRequired,
  newSession: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  loadingConfigs: PropTypes.bool.isRequired,
};

export default PanelGroup;
