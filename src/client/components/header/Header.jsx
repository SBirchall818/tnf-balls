import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import styles from './header-styles';
import SaveButton from '../headerButtons/SaveButton';
import ChangeUserButton from '../headerButtons/ChangeUserButton';
import ChangeConfigButton from '../headerButtons/ChangeConfigButton';
import PublicCheckbox from '../publicCheckbox/PublicCheckbox';
import withLoading from '../hoc/withLoading';
import { WHITE } from '../../consts/colors';

const SaveButtonWithLoading = withLoading(SaveButton, { marginTop: '10px', color: WHITE }, { width: '108px', paddingLeft: '40px' });

const Header = ({
  saveConfig, changePublic, changeUser, changeConfig, mode, savingConfigs,
}) => (
  <div className={css(styles.root)}>
    <ChangeUserButton changeUser={changeUser} />
    <ChangeConfigButton changeConfig={changeConfig} />
    <SaveButtonWithLoading saveConfig={saveConfig} mode={mode} isLoading={savingConfigs} />
    <PublicCheckbox changePublic={changePublic} mode={mode} />
    <p className={css(styles.text)}>
      {`Mode: ${mode}`}
    </p>
  </div>
);

Header.propTypes = {
  saveConfig: PropTypes.func.isRequired,
  savingConfigs: PropTypes.bool.isRequired,
  changePublic: PropTypes.func.isRequired,
  changeUser: PropTypes.func.isRequired,
  changeConfig: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Header;
