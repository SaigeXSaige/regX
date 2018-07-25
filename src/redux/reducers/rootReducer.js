import { combineReducers } from "redux";
import { NEW_INPUT, NEW_WORD_BANK, SUBMIT_INPUT } from "../actions/input";

import a from '../../icons/lowercase/a.svg';
import b from '../../icons/lowercase/b.svg';
import d from '../../icons/lowercase/d.svg';
import e from '../../icons/lowercase/e.svg';
import G from '../../icons/uppercase/G.svg';
import k from '../../icons/lowercase/k.svg';
import m from '../../icons/lowercase/m.svg';
import M from '../../icons/uppercase/M.svg';
import N from '../../icons/uppercase/N.svg';
import O from '../../icons/uppercase/O.svg';
import r from '../../icons/lowercase/r.svg';
import s from '../../icons/lowercase/s.svg';
import t from '../../icons/lowercase/t.svg';
import T from '../../icons/uppercase/T.svg';
import u from '../../icons/lowercase/u.svg';
import Three from '../../icons/numbers/3.svg';
import Six from '../../icons/numbers/6.svg';
import exclamation from '../../icons/special_chars/xclamation.svg'

export const initialState = {
    textarea: "abcdefghifklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~",
    input: "/[ -~]/g",
    correctInput: false,
    levels: {
        "1": {
            level: 1, 
            challenge: "Tak3 Out Num6ers",
            answer: [3,6],
            icons: [T,a,k,[Three,e],O,u,t,N,u,m,[Six,b],e,r,s]
        },
        "2": {
            level: 2,
            challenge: "Grab Me!",
            answer: ["Me!"],
            icons: [G,r,a,b,[M,b],[e,e],[exclamation,d]],
            specialChar: ["!", "x"]
        }
    }
}

export function handleInput(state = initialState, action) {
    switch (action.type) {
        case NEW_INPUT:
            return { ...state, input: action.input};
        case NEW_WORD_BANK: 
            return { ...state, textarea: action.textarea};
        case SUBMIT_INPUT:
            return {...state, correctInput: action.correctInput}
        default:
            return {...state};
    }
}



