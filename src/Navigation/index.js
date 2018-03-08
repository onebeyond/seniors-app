import React, { Component } from "react";
import { connect } from "react-redux";
/* import { addNavigationHelpers } from "react-navigation"; */
import NavStack from "./navStack";

class AppNavigation extends Component {
  render() {
    return <NavStack />;
  }
}

/* const mapStateToProps = state => {
  return {
    navigationState: state.navigationReducer
  };
}; */

export default AppNavigation;
