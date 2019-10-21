import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import ScrollList from './ScrollList';
import styles from './selectConfig-styles';
import withLoading from '../hoc/withLoading';

const ScrollListWithLoading = withLoading(ScrollList);

const ConfigColumn = ({
  list, loadConfig, userId, title, loadingConfigs,
}) => (
  <div>
    <h4 className={css(styles.configColumnTitle)}>{title}</h4>
    <ScrollListWithLoading
      isLoading={loadingConfigs}
      list={list}
      loadConfig={loadConfig}
      userId={userId}
    />
  </div>
);

ConfigColumn.propTypes = {
  list: PropTypes.array.isRequired,
  loadConfig: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  loadingConfigs: PropTypes.bool.isRequired,
};

export default ConfigColumn;
