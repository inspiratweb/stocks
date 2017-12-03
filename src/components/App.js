import React, { Component } from 'react';
import MarketList from './MarketList';
import Button from './Button';
import currenciesList from "../currenciesList.json";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MarketList
          endpoint={currenciesList}
        />
        <Button /> */}
        <aside>
          <ul className="currencyList">
            <li className="currencyList-item">
              <div className="currencyList-item-content">
                  component
              </div>
            </li>
            <li className="currencyList-item">
            <div className="currencyList-item-content">
                component
            </div>
          </li>
          <li className="currencyList-item">
              <div className="currencyList-item-content">
                  component
              </div>
            </li>
          </ul>
        </aside>
        <section className="currencyDetail">
          content
        </section>
      </div>
    );
  }
}

export default App;
