import { PROFILE_LOGIN } from '../actions/profile';

import {
 takeLatest,
} from 'redux-saga/effects';

export function* loginProcess() {
  try {

  } catch (err) {

  }
}

export function* watchLoginProcess() {
  yield takeLatest(PROFILE_LOGIN, loginProcess);
}
