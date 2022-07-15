import {combineReducers} from "redux";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return state.push(action.payload);
        default:
            return state;
    }
    ;
}


export const allReducers = combineReducers({
    todo: todoReducer,
});

export default allReducers;