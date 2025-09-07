import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLogged from "./isLogged";

const allR=combineReducers({
    counterReducer: counterReducer,
    isLogged: isLogged

});
 export default allR;