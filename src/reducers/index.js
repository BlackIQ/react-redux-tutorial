import {combineReducers} from "redux";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return state.concat(action.payload);
        case "DELETE_TODO":
            return state.filter(data => data !== action.payload);
        default:
            return state;
    }
}


const allReducers = combineReducers({
    todo: todoReducer,
});

export default allReducers;