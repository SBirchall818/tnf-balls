import { StyleSheet } from 'aphrodite';
import {
  APP_BLUE,
  PASTEL_RED,
  PASTEL_RED_HIGHLIGHT,
  WHITE,
  HIGHLIGHT_BLUE,
} from '../../consts/colors';

const styles = StyleSheet.create({
  root: {
  },
  header: {
    backgroundColor: APP_BLUE,
    width: '100%',
    height: '40px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: WHITE,
  },
  panelGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    height: 'calc(100vh - 140px)',
  },
  scrollList: {
    height: '100%',
    overflow: 'scroll',
    overflowY: 'visible',
    paddingRight: '10px',
    paddingLeft: '10px',
  },
  newSession: {
    width: '150px',
  },
  newSessionText: {
    textAlign: 'center',
    color: WHITE,
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: ' 3px',
    backgroundColor: PASTEL_RED,
    ':hover': {
      cursor: 'pointer',
      backgroundColor: PASTEL_RED_HIGHLIGHT,
    },
  },
  scrollItem: {
    padding: '5px',
    borderRadius: '3px',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: HIGHLIGHT_BLUE,
    },
  },
  configColumnTitle: {
    textAlign: 'center',
  },
});

export default styles;
