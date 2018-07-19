import { combineReducers } from "redux";
import { NEW_INPUT } from "../actions/input";

export const initialState = {
    textarea: "abcdefghifklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~",
    input: "" // "/[ -~]/g"
}

export function inputChange(state = initialState, action) {
    switch (action.type) {
        case NEW_INPUT:
            return { ...state, input: action.input};
        default:
            return {...state};
    }
}



