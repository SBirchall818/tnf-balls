import React from 'react';
import moment from 'moment';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import styles from './selectConfig-styles';

const momentFormat = 'ddd HH:mm';

const ScrollItem = ({ config, loadConfig, userId }) => (
  <div>
    <p
      className={css(styles.scrollItem)}
      onClick={() => {
        console.log('clicked\tuserId: ', userId);
        loadConfig({ configId: config.id, userId });
      }}
    >

      {`${config.id}: `}
      {moment(config.createdAt).format(momentFormat)}
      {config.user && ` - ${config.user.username}`}
    </p>
  </div>
);

ScrollItem.propTypes = {
  config: PropTypes.object.isRequired,
  loadConfig: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default ScrollItem;
