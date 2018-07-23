import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from './components/HomePage';

const App = () => {

  return (
    <div>
      <NavBar />
      <Switch>
        < Route exact path="/" component={HomePage} />
      </Switch>
    </div>
    );
}

export default App;
