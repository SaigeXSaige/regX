import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import '../node_modules/animate.css'

import NavBar from "./components/NavBar";
import HomePage from './components/HomePage';
import ChallengePage from './components/ChallengePage';

const App = (props) => {

  return (
    <div>
      <NavBar />
      <Switch>
        < Route exact path="/" component={HomePage} />
        < Route exact path="/challenges/:id" render={(props) => < ChallengePage {...props} />} />
      </Switch>
    </div>
    );
}

export default App;
