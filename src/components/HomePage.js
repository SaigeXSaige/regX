import React from 'react';

import WordBankContainer from './WordBankContainer';
import Form from './Form';

const HomePage = () => {
    return (
        <div className="App">
            <h2>Welcome to RegX</h2>
            <p className="App-intro">
            Try typing a regular expression in the input form below!
            </p>
            < WordBankContainer />
            < Form />
      </div>
    );
}

export default HomePage;
