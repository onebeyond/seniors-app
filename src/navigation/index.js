import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
} from 'react-navigation';

import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

import AppNavigator from './navStack';

class AppNavigation extends Component {
  constructor(props) {
    super(props);
    this.addListener = createReduxBoundAddListener("root");
  }
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener: this.addListener,
      })} />
    );
  }
}
const mapStateToProps = state => ({
  nav: state.root.nav
});

export default connect(mapStateToProps)(AppNavigation);
