import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitInput } from '../redux/actions/input';

const NextLevelBtn = ({level, handleClick}) => {
    return (
        <div>
            {
                level === 4 ? 
                <button disabled="disabled">Congrats!</button> : 
                <Link to={`/challenges/${++level}`}>
                    <button onClick={handleClick}>Next Level</button>
                </Link>
            }
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(submitInput(false))
    } 
};

export default connect(null, mapDispatchToProps)(NextLevelBtn);
