import React, { Component } from 'react';
import CurrencyList from './CurrencyList';
import CurrencyDetail from './CurrencyDetail';
import Button from './Button';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <aside>
          <CurrencyList />
        </aside>
        <CurrencyDetail />
      </div>
    );
  }
}

export default App;
