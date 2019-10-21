import { StyleSheet } from 'aphrodite';
import { APP_BLUE } from '../../consts/colors';

const styles = StyleSheet.create({
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    backgroundColor: APP_BLUE,
    padding: '10px',
    height: '40px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    margin: 0,
    alignSelf: 'center',
    width: '125px',
  },
});

export default styles;
