import React, { Component } from 'react';
import CurrencyList from '../containers/CurrencyList';
import CurrencyDetail from '../containers/CurrencyDetail';
import Button from './Button';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <aside className="layout-aside">
          <CurrencyList />
        </aside>
        <div className="layout-main">
          <CurrencyDetail />
        </div>
      </div>
    );
  }
}

export default App;
