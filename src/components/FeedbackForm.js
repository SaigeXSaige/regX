import React from 'react';
import { connect } from 'react-redux';

import { submitFeedback } from '../redux/actions/input';

const FeedbackForm = ({handleSubmit}) => {
    return (
        <div>
            <h2>Submit Your Feedback Below</h2>
            <form className="feedback" onSubmit={handleSubmit}>
                <input type="text" id="email" placeholder="Email Address"/>
                <textarea cols="30" rows="10" id="content" placeholder="Enter your feedback here"></textarea>
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (e) => {
        e.preventDefault();
        dispatch(submitFeedback(true))
    }
})

export default connect(null, mapDispatchToProps)(FeedbackForm);
