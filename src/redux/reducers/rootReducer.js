import { combineReducers } from "redux";
import { NEW_INPUT } from "../actions/input";

export const initialState = {
    textarea: "abcdefghifklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~",
    input: "" // "/[ -~]/g"
}

function inputChange(state = initialState.input, action) {
    switch (action.type) {
        case NEW_INPUT:
            return action.input;
        default:
            return state;
    }
}

export const rootReducer = () => combineReducers({inputChange});

