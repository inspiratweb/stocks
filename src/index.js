import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import currenciesApp from './reducers'
import App from './components/App';
import curenciesInitialState from "./curenciesInitialState.json";

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  currenciesApp,
  curenciesInitialState,
  composeEnhancers(),  
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
