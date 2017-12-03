import React, { Component } from 'react';
import MarketList from './MarketList';
import Button from './Button';
import currenciesList from "../currenciesList.json";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="layout">
        {/* <MarketList
          endpoint={currenciesList}
        />
        <Button /> */}
        <aside>
          <ul className="currencyList">
            <li className="currencyList-item">
              <ul className="currencyList-item-content">
                  <li className="currencyList-item-title">ASD</li>
                  <li className="currencyList-item-chart">chart</li>
                  <li className="currencyList-item-value">324.3€</li>
              </ul>
            </li>
            <li className="currencyList-item active">
              <ul className="currencyList-item-content">
                  <li className="currencyList-item-title">WADUS</li>
                  <li className="currencyList-item-chart">chart</li>
                  <li className="currencyList-item-value">324.3€</li>
              </ul>
            </li>
            <li className="currencyList-item">
              <ul className="currencyList-item-content">
                  <li className="currencyList-item-title">EU</li>
                  <li className="currencyList-item-chart">chart</li>
                  <li className="currencyList-item-value">324.3€</li>
              </ul>
            </li>
          </ul>
        </aside>
        <section className="currencyDetail">
          <header className="currencyDetail-header">
            <section class="currencyDetail-info">
              <h3 className="currencyDetail-info-value">234.40€</h3>
              <p>
                <span className="currencyDetail-info-rate highlight-positive">5.17 (2.24%)</span>
                TODAY
              </p>
            </section>
            <section className="currencyDetail-data">
              <p className="currencyDetail-data-title">WADUS</p>
              <p>wadus complete name</p>
            </section>
          </header>
          <section className="currencyDetail-chart">
            chart
          </section>
          <footer className="currencyDetail-footer">
            <section className="currencyDetail-disclaimer">
              <h4 className="currencyDetail-disclaimer-title">About</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Illum quidem excepturi hic explicabo doloremque architecto reprehenderit, corrupti error ipsa aut numquam aliquid</p>
              <p>Doloremque quam et itaque quibusdam necessitatibus officiis voluptate.</p>
            </section>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
