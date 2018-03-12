import { SET_AUTH } from '../../actions/profile';

const initialState = {
  isLoggedIn: false,
  userName: ''
};

export function user(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        userName: action.payload.userName,
        password: action.payload.password
      };
      break;
    default:
      return state;
  }
  return state;
}
