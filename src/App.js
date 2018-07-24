import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import '../node_modules/animate.css'

import NavBar from "./components/NavBar";
import HomePage from './components/HomePage';
import ChallengeContainer from './components/ChallengeContainer';

const App = () => {

  return (
    <div>
      <NavBar />
      <Switch>
        < Route exact path="/" component={HomePage} />
        < Route exact path="/challenges" component={ChallengeContainer} />
      </Switch>
    </div>
    );
}

export default App;
