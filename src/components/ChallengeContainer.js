import React, { Component } from 'react';

import ChallengePage from './ChallengePage';

class ChallengeContainer extends Component {

    render() {
        return (
            <div className="App">
                < ChallengePage level={1} challenge="Tak3 Out Num6ers" answer="3,6" />
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
