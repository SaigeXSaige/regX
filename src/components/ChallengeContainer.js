import React, { Component } from 'react';

import ChallengePage from './ChallengePage';

import a from '../icons/lowercase/a.svg';
import b from '../icons/lowercase/b.svg';
import d from '../icons/lowercase/d.svg';
import e from '../icons/lowercase/e.svg';
import G from '../icons/uppercase/G.svg';
import k from '../icons/lowercase/k.svg';
import m from '../icons/lowercase/m.svg';
import M from '../icons/uppercase/M.svg';
import N from '../icons/uppercase/N.svg';
import O from '../icons/uppercase/O.svg';
import r from '../icons/lowercase/r.svg';
import s from '../icons/lowercase/s.svg';
import t from '../icons/lowercase/t.svg';
import T from '../icons/uppercase/T.svg';
import u from '../icons/lowercase/u.svg';
import Three from '../icons/numbers/3.svg';
import Six from '../icons/numbers/6.svg';
import exclamation from '../icons/special_chars/exc.svg'

class ChallengeContainer extends Component {

    render() {
        return (
            <div className="App">
                {/* < ChallengePage 
                    level={1} 
                    challenge="Tak3 Out Num6ers" 
                    answer={[3,6]} 
                    icons={[T,a,k,[Three,e],O,u,t,N,u,m,[Six,b],e,r,s]}
                /> */}
                < ChallengePage 
                    level={2} 
                    challenge="Grab Me!"
                    answer={["M","e"]}
                    icons={[G,r,a,b,[M,b],[e,e],[exclamation,d]]}
                />
                {/* < ChallengePage level={3}/>
                < ChallengePage level={4}/>
                < ChallengePage level={5}/> */}
            </div>
        );
    }
}

export default ChallengeContainer;
