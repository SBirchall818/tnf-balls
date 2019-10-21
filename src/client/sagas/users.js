import { put, take } from 'redux-saga/effects';
import {
  GET_USERS,
  USERS_RECEIVED,
} from '../consts/messages';

function* fetchUsers() {
  while (true) {
    yield take(GET_USERS);
    const json = yield fetch('/api/users', { method: 'POST' })
      .then(response => response.json());

    console.log('Accounts: ', json);

    // TODO - handle receiving errors back from the server in state somehow
    yield put({ type: USERS_RECEIVED, json: json.users });
  }
}

export default fetchUsers;
