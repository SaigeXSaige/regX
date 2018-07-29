import React from 'react';
import { connect } from 'react-redux';

import FeedbackForm from './FeedbackForm';

const FeedbackPage = ({isSubmitted}) => {
    return (
        <div className="App">
            { isSubmitted ?
                <h2>Thank You For Helping Improve RegX!</h2> :
                < FeedbackForm />
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    isSubmitted: state.isSubmitted
})

export default connect(mapStateToProps)(FeedbackPage);
