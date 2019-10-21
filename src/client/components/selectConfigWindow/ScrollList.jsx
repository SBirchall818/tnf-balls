import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import ScrollItem from './ScrollItem';
import styles from './selectConfig-styles';

const ScrollList = ({ list, loadConfig, userId }) => (
  <div className={css(styles.scrollList)}>
    {list && list.map(config => (
      <ScrollItem
        key={config.id}
        config={config}
        loadConfig={loadConfig}
        userId={userId}
      />
    ))}
  </div>
);

ScrollList.propTypes = {
  list: PropTypes.array.isRequired,
  loadConfig: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default ScrollList;
