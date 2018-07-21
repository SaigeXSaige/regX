import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import basicHome from "./icons/basicHome.svg";
import lightning from "./icons/lightning.svg";
import book from "./icons/book.svg";
import feedback from "./icons/feedback.svg";

import WordBank from './components/WordBank';
import Form from './components/Form';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={basicHome} className="App-logo" alt="logo" />
          <img src={lightning} className="App-logo" alt="logo" />
          <img src={book} className="App-logo" alt="logo" />
          <img src={feedback} className="App-logo" alt="logo" />
        </div>
        <h2>Welcome to RegX</h2>
        <p className="App-intro">
          Try typing a regular expression in the input form below!
        </p>
        < WordBank textArea={this.props.textarea} />
        < Form input={this.props.input} />
      </div>
    );
  }
}

export default connect((state)=> ({textarea: state.textarea, input: state.input}))(App);
