import { NEW_INPUT, NEW_WORD_BANK, SUBMIT_INPUT, SUBMIT_FEEDBACK } from "../actions/input";

import a from '../../icons/lowercase/a.svg';
import A from '../../icons/uppercase/A.svg';
import b from '../../icons/lowercase/b.svg';
import c from '../../icons/lowercase/c.svg';
import C from '../../icons/uppercase/C.svg';
import d from '../../icons/lowercase/d.svg';
import D from '../../icons/uppercase/D.svg';
import e from '../../icons/lowercase/e.svg';
import E from '../../icons/uppercase/E.svg';
import G from '../../icons/uppercase/G.svg';
import k from '../../icons/lowercase/k.svg';
import l from '../../icons/lowercase/l.svg';
import L from '../../icons/uppercase/L.svg';
import m from '../../icons/lowercase/m.svg';
import M from '../../icons/uppercase/M.svg';
import n from '../../icons/lowercase/n.svg';
import N from '../../icons/uppercase/N.svg';
import o from '../../icons/lowercase/o.svg';
import O from '../../icons/uppercase/O.svg';
import p from '../../icons/lowercase/p.svg';
import P from '../../icons/uppercase/P.svg';
import r from '../../icons/lowercase/r.svg';
import R from '../../icons/uppercase/R.svg';
import s from '../../icons/lowercase/s.svg';
import S from '../../icons/uppercase/S.svg';
import t from '../../icons/lowercase/t.svg';
import T from '../../icons/uppercase/T.svg';
import u from '../../icons/lowercase/u.svg';
import w from '../../icons/lowercase/w.svg';
import W from '../../icons/uppercase/W.svg';
import y from '../../icons/lowercase/y.svg';
import One from '../../icons/numbers/1.svg';
import Two from '../../icons/numbers/2.svg';
import Three from '../../icons/numbers/3.svg';
import Six from '../../icons/numbers/6.svg';
import exclamation from '../../icons/special_chars/xclamation.svg'

export const initialState = {
    textarea: "abcdefghifklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]\\{}|;':\",./<>?`~",
    input: "/[ -~]/g",
    correctInput: false,
    isSubmitted: false,
    levels: {
        "1": {
            level: 1, 
            challenge: "Grab Me!",
            answer: ["Me!"],
            icons: [G,r,a,b,[M,b],[e,e],[exclamation,d]],
            specialChar: ["!", "x"],
            description: "By default, regular expressions grab the first match and store it. You can match an entire word by just wrapping it inside the opening and closing '/'s"
        },
        "2": {
            level: 2,
            challenge: "Tak3 Out Num6ers",
            answer: [3,6],
            icons: [T,a,k,[Three,e],O,u,t,N,u,m,[Six,b],e,r,s],
            description: "To grab numbers, you can use the '/d' character class for digits or wrap a range of characters in '[ ]'. To grab multiple matches, you use the 'g' (global) flag"
        },
        "3": {
            level: 3,
            challenge: "On1y Caps And Num",
            answer: ["O",1,"C","A","N"],
            icons: [[O,o],n,[One,l],y,[C,c],a,p,s,[A,a],n,d,[N,n],u,m],
            description: "Regular expressions by default are case sensitive and read characters as ",
            link: "Unicode"

        },
        "4": {
            level: 4,
            challenge: "Low3R Cas3 2 CAPS",
            answer: ["ow3","as3"],
            icons: [L,[o,O],[w,W],[Three,E],R,C,[a,A],[s,S],[Three,E],Two,C,A,P,S],
            description: "The '+' quantifier will match 1 or more of the preceeding expression tokens"
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
            return {...state, correctInput: action.correctInput};
        case SUBMIT_FEEDBACK:
            return {...state, isSubmitted: action.isSubmitted}
        default:
            return {...state};
    }
}



