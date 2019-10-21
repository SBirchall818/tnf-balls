import {
  USERS_RECEIVED,
  SET_CURRENT_USER,
  BALL_CONFIGS_RECEIVED,
  FULL_CONFIG_RECEIVED,
  SAVE_BALL,
  SET_PUBLIC_CHECKBOX,
  CHANGE_USER,
  CONFIG_SAVED,
  FINISH_REPLAY,
  LOAD_CONFIG,
  NEW_SESSION,
  CHANGE_CONFIG,
} from '../consts/messages';
import {
  NEW_MODE,
  REPLAY_MODE,
  FINISHED_MODE,
} from '../consts/modes';


const initialState = {
  savedBalls: [],
  makePublic: false,
  mode: NEW_MODE,
  loadedConfig: { balls: [] },
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_RECEIVED:
      return { ...state, users: action.json };
    case SET_CURRENT_USER:
      return { ...state, user: action.json };
    case BALL_CONFIGS_RECEIVED:
      return {
        ...state,
        myBallConfigs: action.json.myBallConfigs,
        publicBallConfigs: action.json.publicBallConfigs,
      };
    case FULL_CONFIG_RECEIVED:
      return { ...state, loadedConfig: action.json };
    case SAVE_BALL:
      return { ...state, savedBalls: state.savedBalls.concat([action.ball]) };
    case SET_PUBLIC_CHECKBOX:
      return { ...state, makePublic: action.makePublic };
    case CHANGE_USER:
      return { ...state, savedBalls: initialState.savedBalls, makePublic: initialState.makePublic };
    case CHANGE_CONFIG:
      return { ...state, savedBalls: initialState.savedBalls, makePublic: initialState.makePublic };
    case CONFIG_SAVED:
      return { ...state, mode: FINISHED_MODE };
    case FINISH_REPLAY:
      return { ...state, mode: FINISHED_MODE };
    case LOAD_CONFIG:
      return { ...state, mode: REPLAY_MODE };
    case NEW_SESSION:
      return { ...state, mode: NEW_MODE };
    default:
      return state;
  }
};

export default appReducer;
