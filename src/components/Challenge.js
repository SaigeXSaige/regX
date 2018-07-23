import React from 'react';

import Icon from './Icon'
import T from '../icons/uppercase/T.svg';
import a from '../icons/lowercase/a.svg';
import k from '../icons/lowercase/k.svg';
import Three from '../icons/numbers/3.svg';
import O from '../icons/uppercase/O.svg';
import u from '../icons/lowercase/u.svg';
import t from '../icons/lowercase/t.svg';
import N from '../icons/uppercase/N.svg';
import m from '../icons/lowercase/m.svg';
import Six from '../icons/numbers/6.svg';
import e from '../icons/lowercase/e.svg';
import r from '../icons/lowercase/r.svg';
import s from '../icons/lowercase/s.svg';

const Challenge = (props) => {
    return (
        <div className="challenge">
            <Icon src={T} alt="T"/>
            <Icon src={a} alt="a"/>
            <Icon src={k} alt="k"/>
            <Icon src={Three} alt="3"/>
            <Icon src={O} alt="O"/>
            <Icon src={u} alt="u"/>
            <Icon src={t} alt="t"/>
            <Icon src={N} alt="N"/>
            <Icon src={u} alt="u"/>
            <Icon src={m} alt="m"/>
            <Icon src={Six} alt="6"/>
            <Icon src={e} alt="e"/>
            <Icon src={r} alt="r"/>
            <Icon src={s} alt="s"/>
        </div>    
    );
}

export default Challenge;
