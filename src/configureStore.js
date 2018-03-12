import { createStore, applyMiddleware, compose } from 'redux';
/* import { persistStore, autoRehydrate } from 'redux-persist'; */

//import createExpirationTransform from 'redux-persist-transform-expire';

// import { AsyncStorage } from 'react-native';
//import createSagaMiddleware from 'redux-saga';

import RootReducer from './reducers';
import rootSagas from './sagas';

// Check if gloval.__DEV__ exist in all the environments/devices;
const composeEnhancers = global.__DEV__
? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const sagaMiddleware = createSagaMiddleware();


export default function configureStore() {
	const store = createStore(
		RootReducer,
		composeEnhancers(
			applyMiddleware(sagaMiddleware),
			//autoRehydrate()
		),
	);

/* 	persistStore(store, {
		storage: AsyncStorage,
		whitelist: ['root']
	}, () => {}); */

	sagaMiddleware.run(rootSagas);

  return store;
}
