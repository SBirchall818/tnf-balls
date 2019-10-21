import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Window from '../components/ballWindow/Window';
import Header from '../components/header/Header';
import * as actions from '../actions';

const BallsScreen = ({
  saveBall,
  saveConfig,
  changePublic,
  changeUser,
  changeConfig,
  mode,
  replayBalls,
  finishReplay,
  savingConfigs,
}) => (
  <>
    <Window saveBall={saveBall} mode={mode} replayBalls={replayBalls} finishReplay={finishReplay} />
    <Header
      saveConfig={saveConfig}
      changePublic={changePublic}
      changeUser={changeUser}
      changeConfig={changeConfig}
      mode={mode}
      savingConfigs={savingConfigs}
    />
  </>
);

BallsScreen.propTypes = {
  saveBall: PropTypes.func.isRequired,
  saveConfig: PropTypes.func.isRequired,
  changePublic: PropTypes.func.isRequired,
  changeUser: PropTypes.func.isRequired,
  changeConfig: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  replayBalls: PropTypes.array.isRequired,
  finishReplay: PropTypes.func.isRequired,
  savingConfigs: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  mode: state.appReducer.mode,
  replayBalls: state.appReducer.loadedConfig.balls,
  savingConfigs: state.configReducer.savingConfigs,
});

const mapDispatchToProps = {
  saveBall: actions.saveBall,
  saveConfig: actions.saveConfig,
  changePublic: actions.changePublic,
  changeUser: actions.changeUser,
  changeConfig: actions.changeConfig,
  finishReplay: actions.finishReplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(BallsScreen);
