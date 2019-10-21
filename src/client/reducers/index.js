import { combineReducers } from 'redux';
import appReducer from './appReducer';
import userReducer from './userReducer';
import configReducer from './configReducer';

const reducer = combineReducers({
  appReducer,
  userReducer,
  configReducer,
});

export default reducer;
