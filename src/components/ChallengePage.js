import React from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import ChallengeForm from './ChallengeForm';
import Challenge from './Challenge';

const ChallengePage = ({level, challenge, answer, correctInput}) => {
    return (
        <div>
            <Title level={level} />
            <Challenge correctInput={correctInput} />
            <ChallengeForm challenge={challenge} answer={answer} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    ...state, correctInput: state.correctInput
})

export default connect(mapStateToProps)(ChallengePage);
