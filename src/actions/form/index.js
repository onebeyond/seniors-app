export const LOGIN = 'LOGIN';

export function sendUserData(data) {
  return {
    type: LOGIN,
    payload: data
  };
}