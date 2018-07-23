import React from 'react';
import './App.css';
import { Route } from 'react-router';
import NavBar from "./components/NavBar";
import HomePage from './components/HomePage';

const App = () => {

    return (
      <div>
        < Route component={NavBar} />
        < Route component={HomePage} />
      </div>
    );
}

export default App;
