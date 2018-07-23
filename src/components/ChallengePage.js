import React from 'react';

import Title from './Title';
import Form from './Form';
import Challenge from './Challenge';

const ChallengePage = ({level}) => {
    return (
        <div>
            <Title level={level} />
            <Challenge />
            <Form />
        </div>
    );
}

export default ChallengePage;
