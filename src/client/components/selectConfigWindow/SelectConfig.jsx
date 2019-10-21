import React from 'react';
import PropTypes from 'prop-types';
import ScrollList from './ScrollList';

const SelectConfig = ({
  myBallConfigs, publicBallConfigs, loadConfig, userId,
}) => (
  <>
    <ScrollList list={myBallConfigs} loadConfig={loadConfig} userId={userId} />
    <ScrollList list={publicBallConfigs} loadConfig={loadConfig} userId={userId} />
  </>
);

SelectConfig.propTypes = {
  myBallConfigs: PropTypes.array.isRequired,
  publicBallConfigs: PropTypes.array.isRequired,
  loadConfig: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default SelectConfig;
