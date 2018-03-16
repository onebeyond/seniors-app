import {
  takeLatest, put, call
} from 'redux-saga/effects';

import { NavigationActions } from 'react-navigation';


// Actions
import { PROFILE_LOGIN, setAuth } from '../actions/profile';
import { showError } from '../actions/ui/ui';

// Services
import { checkValidUser } from '../services/loginSrv';

export function* loginProcess({ payload: { userName, pass } }) {
  try {
    yield put(showError(false));
    yield call(checkValidUser, { userName, pass });
    yield put(setAuth({ userName, pass }));
    yield put(NavigationActions.navigate({
      routeName: 'MainScreen'
    }));
  } catch (err) {
    yield put(showError({ name: err.name, message: err.message }));
    console.log('err', err);
  }
}

export function* watchLoginProcess() {
  yield takeLatest(PROFILE_LOGIN, loginProcess);
}
