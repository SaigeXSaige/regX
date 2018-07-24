import { combineReducers } from "redux";
import { NEW_INPUT, NEW_WORD_BANK, SUBMIT_INPUT } from "../actions/input";

export const initialState = {
    textarea: "abcdefghifklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~",
    input: "/[ -~]/g",
    answer: false
}

export function handleInput(state = initialState, action) {
    switch (action.type) {
        case NEW_INPUT:
            return { ...state, input: action.input};
        case NEW_WORD_BANK: 
            return { ...state, textarea: action.textarea};
        case SUBMIT_INPUT:
            return {...state, answer: action.answer}
        default:
            return {...state};
    }
}



