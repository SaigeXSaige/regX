import React from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import ChallengeForm from './ChallengeForm';
import Challenge from './Challenge';
import NextLevelBtn from "./NextLevelBtn";

const ChallengePage = ({levels, correctInput, match}) => {
    const id = match.params.id
    const {level, challenge, answer, icons, specialChar} = levels[id]

    return (
        <div className="App">
            <Title level={level} />
            <Challenge icons={icons} correctInput={correctInput} />
            {!correctInput ? <ChallengeForm challenge={challenge} specialChar={specialChar} answer={answer} />
                : < NextLevelBtn level={level} />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    correctInput: state.correctInput,
    levels: state.levels
})

export default connect(mapStateToProps)(ChallengePage);
