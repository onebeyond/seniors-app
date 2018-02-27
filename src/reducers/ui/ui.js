import {
  SHOW_ERROR, CLOSE_ERROR, OPEN_FILTER, CLOSE_FILTER, SET_LOADING_STATE
} from '../../actions/ui/ui';


const initiaUi = {
  filterOpen: false,
  error: false,
  loading: true,
  data: []
};

export function ui(state = initiaUi, action) {
  let nextState;
  switch (action.type) {
    case SHOW_ERROR:
      nextState = {
        error: action.payload.error
      };
      break;
    case CLOSE_ERROR:
      nextState = {
        error: false
      };
      break;
    case OPEN_FILTER:
      nextState = {
        filterOpen: true
      };
      break;
    case CLOSE_FILTER:
      nextState = {
        filterOpen: false
      };
      break;
    case SET_LOADING_STATE:
      nextState = {
        loading: action.payload.loading
      };
      break;
    default:
      return state;
  }
  return nextState || state;
}
