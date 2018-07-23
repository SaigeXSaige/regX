import React from 'react';

import WordBankContainer from './WordBankContainer';
import HomeForm from './HomeForm';

const HomePage = () => {
    return (
        <div className="App">
            <h2>Welcome to RegX</h2>
            <p className="App-intro">
            Try typing a regular expression in the input form below!
            </p>
            < WordBankContainer />
            < HomeForm />
      </div>
    );
}

export default HomePage;
