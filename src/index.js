import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import configureStore  from './redux/store/configureStore';
// import { initialState } from "./redux/actions/input"; JUST INCASE
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById('root')
);
