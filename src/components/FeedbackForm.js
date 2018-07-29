import React from 'react';

const FeedbackForm = () => {
    return (
        <div>
            <h2>Submit Your Feedback Below</h2>
            <form className="feedback">
                <input type="text" id="email" placeholder="Email Address"/>
                <textarea cols="30" rows="10" id="content" placeholder="Enter your feedback here"></textarea>
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
    );
}

export default FeedbackForm;
