import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import basicHome from "./icons/basicHome.svg";
import lightning from "./icons/lightning.svg";
import book from "./icons/book.svg";
import feedback from "./icons/feedback.svg";

import WordBankContainer from './components/WordBankContainer';
import Form from './components/Form';
import { changeInput } from "./redux/actions/input";

const App = () => {

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
        < WordBankContainer />
        < Form input={this.props.input} handleInputChange={this.props.handleInputChange} />
      </div>
    );
}

const mapPropsToState = state => ({
  input: state.input
})

const mapDispatchToState = dispatch => ({
  handleInputChange(value) {
    dispatch(changeInput(value))
  }
})

export default connect( mapPropsToState , mapDispatchToState)(App);
