import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showError, closeError, openFilter, closeFilter } from '../../actions/ui/ui';

import MainScreen from './template';

MainScreen.propTypes = {
};


const mapDispatchToProps = dispatch => ({
  launchError: (e) => dispatch(showError(e)),
  closeError: (e) => dispatch(closeError(e)),
  openFilter: () => dispatch(openFilter()),
  closeFilter: () => dispatch(closeFilter()),
});

const mapStateToProps = state => ({
  loading: state.root.ui.loading,
  error: state.root.ui.loading,
  filterOpen: state.root.ui.filterOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);