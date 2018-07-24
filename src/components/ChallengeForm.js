import React from 'react';
import { connect } from 'react-redux';
import { submitInput } from '../redux/actions/input';

const ChallengeForm = ({challenge, answer, handleSubmit}) => {
    return (
        <form className="regex-input" onSubmit={(e) => handleSubmit(e, challenge, answer)}>
            <input type="text" placeholder="Type expressions here" />
        </form>
    );
}


const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (e, challenge, answer) => {
        e.preventDefault()

        const userInput = e.target.firstChild.value
        if (userInput.includes("/")) {
            const expression = userInput.split("/")
            const regex = new RegExp(expression[1],expression[2])
            const result = challenge.match(regex)
            dispatch(submitInput(result.join() === answer))
        }
     
    }
})

export default connect(null, mapDispatchToProps)(ChallengeForm);
