import { all, fork } from 'redux-saga/effects';

import { watchLoginProcess } from './auth';

export default function* rootSagas() {
  yield all([
    fork(watchLoginProcess)
  ]);
}
