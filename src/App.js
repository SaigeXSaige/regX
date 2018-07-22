import React from 'react';
import './App.css';

import NavBar from "./components/NavBar";
import WordBankContainer from './components/WordBankContainer';
import Form from './components/Form';

const App = () => {

    return (
      <div className="App">
        < NavBar />
        <h2>Welcome to RegX</h2>
        <p className="App-intro">
          Try typing a regular expression in the input form below!
        </p>
        < WordBankContainer />
        < Form />
      </div>
    );
}

export default App;
