import { StyleSheet } from 'aphrodite';
import { TRANSPARENT, WASHED_OUT_BLUE, DISABLED_GREY } from '../../consts/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: TRANSPARENT,
    borderColor: 'white',
    borderRadius: '5px',
    color: 'white',
    borderStyle: 'solid',
    ':hover': {
      background: WASHED_OUT_BLUE,
      cursor: 'pointer',
    },
  },
  disabled: {
    borderColor: TRANSPARENT,
    color: DISABLED_GREY,
    ':hover': {
      background: TRANSPARENT,
    },
  },
});

export default styles;
