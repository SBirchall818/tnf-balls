import { fork } from 'redux-saga/effects';
import fetchUsers from './users';
import { getAvailableConfigs, getConfig, saveConfig } from './ballconfig';

export default function* root() {
  yield fork(fetchUsers);
  yield fork(getAvailableConfigs);
  yield fork(getConfig);
  yield fork(saveConfig);
}
