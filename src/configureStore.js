import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import RootReducer from './reducers';
import rootSagas from './sagas';

// Check if gloval.__DEV__ exist in all the environments/devices;
const composeEnhancers = global.__DEV__
? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const sagaMiddleware = createSagaMiddleware();

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.root.nav
);

export default function configureStore() {
	const store = createStore(
		RootReducer,
		composeEnhancers(
			applyMiddleware(navMiddleware, sagaMiddleware)
		),
	);

	sagaMiddleware.run(rootSagas);

  return store;
}
