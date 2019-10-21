import {
  GET_AVAILABLE_CONFIGS,
  BALL_CONFIGS_RECEIVED,
  SAVE_CONFIG,
  CONFIG_SAVED,
} from '../consts/messages';

const initialState = {
  loadingConfigs: true,
  savingConfigs: false,
};
const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case BALL_CONFIGS_RECEIVED:
      return { ...state, loadingConfigs: false };
    case GET_AVAILABLE_CONFIGS:
      return { ...state, loadingConfigs: true };
    case SAVE_CONFIG:
      return { ...state, savingConfigs: true };
    case CONFIG_SAVED:
      return { ...state, savingConfigs: false };

    default:
      return state;
  }
};

export default configReducer;
