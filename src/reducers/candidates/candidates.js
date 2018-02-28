import {
  SET_ALL_CANDIDATES, SET_MATCHING_CANDIDATES, SET_CANDIDATES_FILTER,
} from '../../actions/candidates/candidates';


const initiaCandidates = {
  allCandidates: [],
  matchingCandidates: [],
  filter: null,
};

export function candidates(state = initiaCandidates, action) {
  let nextState;
  switch (action.type) {
    case SET_ALL_CANDIDATES:
      nextState = {
        ...state,
        allCandidates: action.payload.allCandidates
      };
      break;
    case SET_MATCHING_CANDIDATES:
      nextState = {
        ...state,
        matchingCandidates: action.payload.matchingCandidates
      };
      break;
    case SET_CANDIDATES_FILTER:
      nextState = {
        ...state,
        filter: action.payload.filter
      };
      break;
    default:
      return state;
  }
  return nextState || state;
}
