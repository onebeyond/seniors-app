import {
  takeLatest, put, call
} from 'redux-saga/effects';

// Actions
import { PROFILE_LOGIN, setAuth } from '../actions/profile';

// Services
import { checkValidUser } from '../services/loginSrv';

export function* loginProcess({ payload: { userName, pass } }) {
  try {
    yield call(checkValidUser, { userName, pass });
    yield put(setAuth({ userName, pass }));
  } catch (err) {
    // Filled this field
  }
}

export function* watchLoginProcess() {
  yield takeLatest(PROFILE_LOGIN, loginProcess);
}
