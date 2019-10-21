import { put, take, select } from 'redux-saga/effects';
import {
  GET_AVAILABLE_CONFIGS,
  BALL_CONFIGS_RECEIVED,
  LOAD_CONFIG,
  FULL_CONFIG_RECEIVED,
  SAVE_CONFIG,
  CONFIG_SAVED,
} from '../consts/messages';

function* getAvailableConfigs() {
  while (true) {
    const { userId } = yield take(GET_AVAILABLE_CONFIGS);
    const json = yield fetch(`/api/ballconfig/${userId}`, { method: 'POST' })
      .then(response => response.json());

    // TODO - handle receiving errors back from the server in state somehow
    yield put({ type: BALL_CONFIGS_RECEIVED, json });
  }
}

function* getConfig() {
  while (true) {
    const { configId, userId, cb } = yield take(LOAD_CONFIG);
    const json = yield fetch(`/api/ballconfig/${userId}/${configId}`, { method: 'POST' })
      .then(response => response.json());

    yield put({ type: FULL_CONFIG_RECEIVED, json });
    cb();
  }
}

function* saveConfig() {
  while (true) {
    yield take(SAVE_CONFIG);
    const { user, savedBalls, makePublic } = yield select(state => ({
      user: state.appReducer.user,
      savedBalls: state.appReducer.savedBalls,
      makePublic: state.appReducer.makePublic,
    }));

    // if savedBalls length is zero do not both saving
    if (savedBalls.length > 0) {
      const rawResponse = yield fetch('/api/ballconfig/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          makePublic,
          ballArray: savedBalls,
        }),
      });

      const json = yield rawResponse.json();

      console.log('create ball array returned json: ', json);

      yield put({ type: CONFIG_SAVED });
    }
  }
}

export {
  getAvailableConfigs,
  getConfig,
  saveConfig,
};
