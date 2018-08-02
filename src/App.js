import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import '../node_modules/animate.css'

import NavBar from "./components/NavBar";
import HomePage from './components/HomePage';
import ChallengePage from './components/ChallengePage';
import FeedbackPage from './components/FeedbackPage';

const App = (props) => {

  return (
    <div id="wrapper">
      <NavBar />
      <Switch>
        < Route exact path="/" component={HomePage} />
        < Route exact path="/challenges/:id" render={(props) => < ChallengePage {...props} />} />
        < Route exact path="/feedback" component={FeedbackPage} />
      </Switch>
    </div>
    );
}

export default App;
