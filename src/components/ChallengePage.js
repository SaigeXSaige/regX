import React from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import ChallengeForm from './ChallengeForm';
import Challenge from './Challenge';

const ChallengePage = ({level, answer}) => {
    return (
        <div>
            <Title level={level} />
            <Challenge answer={answer} />
            <ChallengeForm />
        </div>
    );
}

const mapStateToProps = (state) => ({
    ...state, answer: state.answer
})

export default connect(mapStateToProps)(ChallengePage);
