import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showError, closeError, openFilter, closeFilter, setLoadingState } from '../../actions/ui/ui';
import { setAllCandidates, setMatchingCandidates, setCandidatesFilter } from '../../actions/candidates/candidates';

import MainScreen from './template';

MainScreen.propTypes = {
};


const mapDispatchToProps = dispatch => ({
  showError: (e) => dispatch(showError(e)),
  closeError: (e) => dispatch(closeError(e)),
  openFilter: () => dispatch(openFilter()),
  closeFilter: () => dispatch(closeFilter()),
  setLoadingState: (payload) => dispatch(setLoadingState(payload)),
  setAllCandidates: (candidates) => dispatch(setAllCandidates(candidates)),
  setMatchingCandidates: (candidates) => dispatch(setMatchingCandidates(candidates)),
  setCandidatesFilter: (filter) => {
    console.log('setCandidatesFilter')
    dispatch(setCandidatesFilter(filter));
  },
});

const mapStateToProps = state => ({
  loading: state.root.ui.loading,
  error: state.root.ui.error,
  filterOpen: state.root.ui.filterOpen,
  allCandidates: state.root.candidates.allCandidates,
  matchingCandidates: state.root.candidates.matchingCandidates,
  candidatesFilter: state.root.candidates.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);