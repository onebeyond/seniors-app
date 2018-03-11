import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import Filter from './template';


Filter.propTypes = {
  loading: PropTypes.object,
};


const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  loading: state.root.ui.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);