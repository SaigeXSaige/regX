import { combineReducers } from "redux";
import { NEW_INPUT, NEW_WORD_BANK } from "../actions/input";

export const initialState = {
    textarea: "abcdefghifklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~",
    input: "/[ -~]/g"
}

export function inputChange(state = initialState, action) {
    switch (action.type) {
        case NEW_INPUT:
            return { ...state, input: action.input};
        case NEW_WORD_BANK: 
            return { ...state, textarea: action.textarea}
        default:
            return {...state};
    }
}



