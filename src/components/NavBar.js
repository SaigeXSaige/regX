import React from 'react';

import basicHome from "../icons/basicHome.svg";
import lightning from "../icons/lightning.svg";
import book from "../icons/book.svg";
import feedback from "../icons/feedback.svg";

const NavBar = (props) => {
    return (
        <div className="App-header">
            <img src={basicHome} className="App-logo" alt="logo" />
            <img src={lightning} className="App-logo" alt="logo" />
            <img src={book} className="App-logo" alt="logo" />
            <img src={feedback} className="App-logo" alt="logo" />
        </div>
    );
}

export default NavBar;
