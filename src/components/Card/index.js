import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from './template';


Card.propTypes = {
  loading: PropTypes.bool,
};


const mapDispatchToProps = dispatch => ({
  //favorited: () => dispatch(selectCandidate())
  /* fselectUserPoolId: (userPoolId) => dispatch(profileLoginSecondStep(userPoolId)), */
});

const mapStateToProps = state => ({
  loading: state.root.ui.loading
/*   profile: state.root.profile,
  toggles: state.root.toggles,
  config: state.root.config,
  commonUI: state.root.common.commonUI,
  nav: state.root.nav.nav,
  poolingData:
    adaptItemNormalization(state.root.profile.user.poolingData.poolingDatas, false, 'poolingData') */
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);