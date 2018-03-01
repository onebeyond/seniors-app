import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilterInfo from './template';
import { resetFilter } from '../../actions/candidates/candidates';

const mapDispatchToProps = dispatch => ({
  resetFilter: () => dispatch(resetFilter())
});

const mapStateToProps = state => ({
  filtered: state.root.candidates.matchingCandidates.length,
  total: state.root.candidates.allCandidates.length
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterInfo);