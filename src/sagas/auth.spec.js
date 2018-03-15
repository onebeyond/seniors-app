import {
  put, call
} from 'redux-saga/effects';

import { loginProcess } from './auth';

import { setAuth, profileLogin } from '../actions/profile';
import { checkValidUser } from '../services/loginSrv';

it('Auth - check user of login', () => {
  const generator = loginProcess(profileLogin('ruben.romero@guidesmiths.com', '1234567890'));

  expect(generator.next().value)
    .toEqual(call(checkValidUser, { userName: 'ruben.romero@guidesmiths.com', pass: '1234567890'}));

  expect(generator.next().value)
    .toEqual(put(setAuth({ userName: 'ruben.romero@guidesmiths.com', pass: '1234567890'})));

});
