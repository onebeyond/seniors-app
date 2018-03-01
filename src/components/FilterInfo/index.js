import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilterInfo from './template';

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  filtered: state.root.candidates.matchingCandidates.length,
  total: state.root.candidates.allCandidates.length
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterInfo);