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
            const bool = result ? result.join() === answer.join() : false
            
            if (bool) {
                answer.forEach( 
                    x => {
                        document.querySelector(`.char-${x}`).className = "challenge-icon animated flipOutX"
                    }
                )
                
                setTimeout(() => dispatch(submitInput(bool)), 700);
            } else {
                for (var i = 0; i < challenge.length; i++) {
                    let x = challenge.charAt(i), iconList = document.querySelectorAll(`.char-${x}`)
                
                    if (x !== " ") {
                        iconList.forEach( icon => {
                            icon.classList.add("shake")
                            setTimeout(() => {
                                icon.classList.remove("shake")
                            }, 500);
                        })
                    }
                }
            }
        } 
    }
})

export default connect(null, mapDispatchToProps)(ChallengeForm);
