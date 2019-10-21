import { StyleSheet } from 'aphrodite';
import { APP_BLUE } from '../../consts/colors';

const styles = StyleSheet.create({
  root: {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '500px',
  },
  title: {
    textAlign: 'center',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ':hover': {
      cursor: 'pointer',
    },
  },
  icon: {
    color: APP_BLUE,
  },
});

export default styles;
