import React, { Component } from 'react';

import { Provider } from 'react-redux';
import AppNavigation from './src/navigation';

import configureStore from './src/configureStore.js';

export default class App extends Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigation />
      </Provider>
    );
  }
}
