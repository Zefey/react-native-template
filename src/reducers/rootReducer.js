import { combineReducers } from 'redux'
import userReducer from "./userReducer";
import stackReducer from "./stackReducer";

export default combineReducers({
    stackReducer,
    userReducer
})