import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const reactNavigationRedux = createReactNavigationReduxMiddleware((state: any) => state.nav);

import RootReducer from '../reducers/rootReducer';

let middlewares = [];

middlewares.push(thunk);
middlewares.push(logger);
middlewares.push(reactNavigationRedux);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default (initialState: any) => {
    return createStoreWithMiddleware(RootReducer, initialState);
};
