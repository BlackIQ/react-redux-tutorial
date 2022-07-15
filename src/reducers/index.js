import { combineReducers } from "redux";

import counterReducer from "./counter";
import loggedReducer from "./islogged";

const allReducers = combineReducers({
    conter: counterReducer,
    logged: loggedReducer
});

export default allReducers;