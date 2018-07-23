import React from 'react';
import { NavLink } from 'react-router-dom'

import basicHome from "../icons/basicHome.svg";
import lightning from "../icons/lightning.svg";
import book from "../icons/book.svg";
import feedback from "../icons/feedback.svg";

const NavBar = (props) => {
    return (
        <div className="App-header">
            <NavLink to="/">
                <img src={basicHome} className="App-logo" alt="home" />
            </NavLink>
            <NavLink to="/challenges">
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

export default NavBar;
