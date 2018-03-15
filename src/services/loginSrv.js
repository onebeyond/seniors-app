import { loginData } from './mock-data';

export const checkValidUser = ({ userName, pass }) => {
  if(!loginData.some(checkUser => checkUser.userName === userName && checkUser.pass === pass)) {
    throw new Error('userNotValid', 'User not valid');
  }
};
