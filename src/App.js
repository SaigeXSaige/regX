import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import basicHome from "./icons/basicHome.svg";
import lightning from "./icons/lightning.svg";
import book from "./icons/book.svg";
import feedback from "./icons/feedback.svg";

import WordBank from './components/WordBank';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={basicHome} className="App-logo" alt="logo" />
          <img src={lightning} className="App-logo" alt="logo" />
          <img src={book} className="App-logo" alt="logo" />
          <img src={feedback} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        < WordBank textArea={this.props.textarea} />
      </div>
    );
  }
}

export default connect((state)=> ({textarea: state.textarea, input: state.input}))(App);
