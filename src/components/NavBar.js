import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { submitInput, submitFeedback } from '../redux/actions/input';

import basicHome from "../icons/basicHome.svg";
import lightning from "../icons/lightning.svg";
import book from "../icons/book.svg";
import feedback from "../icons/feedback.svg";

const NavBar = ({handleClick}) => {
    return (
        <div className="App-header" onClick={handleClick}>
            <NavLink to="/">
                <img src={basicHome} className="App-logo" alt="home" />
            </NavLink>
            <NavLink to="/challenges/1">
                <img src={lightning} className="App-logo" alt="challenges" />
            </NavLink>
            <NavLink to="/reference">
                <img src={book} className="App-logo" alt="reference" />
            </NavLink>
            <NavLink to="/feedback">
                <img src={feedback} className="App-logo" alt="feedback" />
            </NavLink>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (e) => {
            if (e.target.tagName === 'IMG' && e.target.alt !== "challenges" ) {
                dispatch(submitInput(false)) //sets correctInput to false on icon click
                dispatch(submitFeedback(false)) //sets isSubmitted to false on icon click
            }
        } 
    } 
};

export default connect(null, mapDispatchToProps)(NavBar);
