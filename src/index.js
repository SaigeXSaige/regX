import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import configureStore  from './redux/store/configureStore';
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <Router>
        <App />
    </Router>
  </Provider >,
  document.getElementById('root')
);

registerServiceWorker();