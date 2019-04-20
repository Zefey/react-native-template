import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from "../reducers/rootReducer";

let middlewares = [];

middlewares.push(thunk);
middlewares.push(logger);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(RootReducer,initialState);
}