import React from 'react';

const NextLevelBtn = ({level}) => {
    return (
        <div>
            {level === 2 ? <button disabled="disabled">Congratulations!</button> : <button>Next Level</button>}
        </div>
    );
}

export default NextLevelBtn;
