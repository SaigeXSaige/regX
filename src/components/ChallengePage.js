import React from 'react';

import Title from './Title';
import ChallengeForm from './ChallengeForm';
import Challenge from './Challenge';

const ChallengePage = ({level}) => {
    return (
        <div>
            <Title level={level} />
            <Challenge />
            <ChallengeForm />
        </div>
    );
}

export default ChallengePage;
