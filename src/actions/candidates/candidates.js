export const SET_ALL_CANDIDATES = 'SET_ALL_CANDIDATES';
export const SET_MATCHING_CANDIDATES = 'SET_MATCHING_CANDIDATES';
export const SET_CANDIDATES_FILTER = 'SET_CANDIDATES_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export function setAllCandidates(data) {
  return {
    type: SET_ALL_CANDIDATES,
    payload: data
  };
}

export function setMatchingCandidates(data) {
  return {
    type: SET_MATCHING_CANDIDATES,
    payload: data
  };
}

export function setCandidatesFilter(filter) {
  return {
    type: SET_CANDIDATES_FILTER,
    payload: filter
  };
}

export function resetFilter() {
  return {
    type: RESET_FILTER
  };
}