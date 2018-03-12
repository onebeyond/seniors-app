import Login from './template';
import { connect } from 'react-redux';

import { profileLogin } from '../../actions/profile';

const mapDispatchToProps = dispatch => ({
  profileLogin: (userName, pass) => dispatch(profileLogin(userName, pass))
});

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
