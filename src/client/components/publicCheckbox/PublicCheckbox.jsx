import React from 'react';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import styles from './publicCheckbox-styles';
import saveButtonStyles from '../headerButtons/saveButton-styles';
import { WHITE, DISABLED_GREY } from '../../consts/colors';
import { NEW_MODE } from '../../consts/modes';

const CustomCheckBox = withStyles({
  root: {
    color: WHITE,
    '&$checked': {
      color: WHITE,
    },
  },
  checked: {},
  disabled: {
    color: DISABLED_GREY,
    '&$checked': {
      color: DISABLED_GREY,
    },
  },
})(props => <MaterialCheckbox color="default" {...props} />);

const PublicCheckbox = ({ changePublic, mode }) => {
  const disabled = mode !== NEW_MODE;
  return (
    <span className={css(styles.root)}>
      <p className={css(styles.text, disabled && saveButtonStyles.disabled)}>Public</p>
      <CustomCheckBox disabled={disabled} onChange={changePublic} />
    </span>
  );
};

PublicCheckbox.propTypes = {
  changePublic: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default PublicCheckbox;
