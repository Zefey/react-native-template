import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import userReducer from './userReducer';
import { MyRouter } from '../Root';

const nav = createNavigationReducer(MyRouter);

export default combineReducers({
    nav,
    userReducer,
});
