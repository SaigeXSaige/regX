import React, { Component } from 'react';

import ChallengePage from './ChallengePage';

import T from '../icons/uppercase/T.svg';
import a from '../icons/lowercase/a.svg';
import k from '../icons/lowercase/k.svg';
import Three from '../icons/numbers/3.svg';
import O from '../icons/uppercase/O.svg';
import u from '../icons/lowercase/u.svg';
import t from '../icons/lowercase/t.svg';
import N from '../icons/uppercase/N.svg';
import m from '../icons/lowercase/m.svg';
import b from '../icons/lowercase/b.svg';
import Six from '../icons/numbers/6.svg';
import e from '../icons/lowercase/e.svg';
import r from '../icons/lowercase/r.svg';
import s from '../icons/lowercase/s.svg';

class ChallengeContainer extends Component {

    render() {
        return (
            <div className="App">
                < ChallengePage 
                    level={1} 
                    challenge="Tak3 Out Num6ers" 
                    answer={[3,6]} 
                    icons={[T,a,k,[Three,e],O,u,t,N,u,m,[Six,b],e,r,s]}/>
                {/* 
                < ChallengePage level={2}/>
                < ChallengePage level={3}/>
                < ChallengePage level={4}/>
                < ChallengePage level={5}/> */}
            </div>
        );
    }
}

export default ChallengeContainer;
