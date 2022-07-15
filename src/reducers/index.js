import { combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + action.payload;
        case "DEC":
            return state - action.payload;
        default:
          return state;
    };
}

const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return !state;
        case "SIGN_OUT":
            return !state;
        default:
            return state;
    }
}

export const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
});

export default allReducers;