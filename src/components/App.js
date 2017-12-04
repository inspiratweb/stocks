import React, { Component } from 'react';
import CurrencyList from './CurrencyList';
import CurrencyDetail from './CurrencyDetail';
import Button from './Button';
import currenciesOrdered from "../currenciesOrdered.json";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <aside>
          <CurrencyList
            endpoint={currenciesOrdered}
          />
        </aside>
        <CurrencyDetail />
      </div>
    );
  }
}

export default App;
