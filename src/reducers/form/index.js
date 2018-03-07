import {
    LOGIN
  } from '../../actions/form';

  
  
  const initialState = {
    isLoadded: false,
    userName: '',
  };

  
  export function formReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        return Object.assign({}, state, {
            userName: action.payload.userName,
            password: action.payload.password
        })
        break;
      default:
        return state;
    }
    return state;
  }
  