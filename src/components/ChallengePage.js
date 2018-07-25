import React from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import ChallengeForm from './ChallengeForm';
import Challenge from './Challenge';
import NextLevelBtn from "./NextLevelBtn";

const ChallengePage = ({level, challenge, answer, icons, specialChar, correctInput}) => {
    return (
        <div>
            <Title level={level} />
            <Challenge icons={icons} correctInput={correctInput} />
            {!correctInput ? <ChallengeForm challenge={challenge} specialChar={specialChar} answer={answer} />
                : < NextLevelBtn level={level} />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    ...state, correctInput: state.correctInput
})

export default connect(mapStateToProps)(ChallengePage);
