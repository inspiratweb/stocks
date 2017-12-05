import React, { Component } from 'react';
import CurrencyList from './CurrencyList';
import CurrencyDetail from './CurrencyDetail';
import Button from './Button';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = { selectedCurrency: null };
    this.selectedCurrency = this.selectedCurrency.bind(this);
  }

  selectedCurrency(currency) {
    this.setState({ selectedCurrency: currency });
  }

  render() {
    return (
      <div className="layout">
        <aside>
          <CurrencyList
            selectedCurrency={this.selectedCurrency}
          />
        </aside>
        <CurrencyDetail
          selectedCurrency={this.state.selectedCurrency}
        />
      </div>
    );
  }
}

export default App;
