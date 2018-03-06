import {
    LOGIN
  } from '../../actions/form';

  
  
  const initialState = {
    isLoadded: false,
    userName: '',
  };

  
  export function formReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
      case LOGIN:
        return nextState ={
            ...state, 
            userName: action.payload.userName,
            password: action.payload.password
        }
        break;
      default:
        return state;
    }
    return nextState || state;
  }
  