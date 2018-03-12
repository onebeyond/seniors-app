export const SET_AUTH = 'SET_AUTH';
export const PROFILE_LOGIN = 'PROFILE_LOGIN';

export function setAuth(userName, pass) {
  return {
    type: SET_AUTH,
    payload: {
      userName,
      pass
    }
  };
}

export function profileLogin(userName, pass) {
  return {
    type: PROFILE_LOGIN,
    payload: {
      userName,
      pass
    }
  };
}
