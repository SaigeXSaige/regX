import { combineReducers } from "redux";

const initialState = {
    textarea: "abcdefghifklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~",
    input: "" // "/[ -~]/g"
}

function inputChange(state = initialState.input, action) {
    switch (action.type) {
        case 'NEW_INPUT':
            return action.input;
        default:
            return state;
    }
}

const rootReducer = () => combineReducers({inputChange});

export default rootReducer;
