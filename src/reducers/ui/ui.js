import {
  SHOW_ERROR, CLOSE_ERROR, OPEN_FILTER, CLOSE_FILTER, SET_LOADING_STATE
} from '../../actions/ui/ui';


const initiaUi = {
  filterOpen: false,
  error: false,
  loading: true,
};

export function ui(state = initiaUi, action) {
  let nextState;
  switch (action.type) {
    case SHOW_ERROR:
      nextState = {
        ...state,
        error: action.payload
      };
      break;
    case CLOSE_ERROR:
      nextState = {
        ...state,
        error: false
      };
      break;
    case OPEN_FILTER:
      nextState = {
        ...state,
        filterOpen: true
      };
      break;
    case CLOSE_FILTER:
      nextState = {
        ...state,
        filterOpen: false
      };
      break;
    case SET_LOADING_STATE:
      nextState = {
        ...state,
        loading: action.payload.loading
      };
      break;
    default:
      return state;
  }
  return nextState || state;
}
