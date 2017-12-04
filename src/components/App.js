import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import MarketList from './MarketList';
import Button from './Button';
import currenciesOrdered from "../currenciesOrdered.json";
import '../styles/App.css';

class App extends Component {
  render() {
    const chartData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#26e2a7',
        borderWidth: 2,
        pointBorderColor: 'transparent',
      }]
    };
    const chartOptions = {
      legend: {
        display: false
      },
      tooltips:{
        enabled: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    }
    return (
      <div className="layout">
        {/* <MarketList
          endpoint={currenciesOrdered}
        />
        <Button /> */}
        <aside>
          <MarketList
            endpoint={currenciesOrdered}
          />
          {/* <ul className="currencyList">
            <li className="currencyList-item">
              <ul className="currencyList-item-content">
                  <li className="currencyList-item-title">ASD</li>
                  <li className="currencyList-item-chart">
                    <Line height={60} data={chartData} options={chartOptions} />
                  </li>
                  <li className="currencyList-item-value">324.3€</li>
              </ul>
            </li>
            <li className="currencyList-item active">
              <ul className="currencyList-item-content">
                  <li className="currencyList-item-title">WADUS</li>
                  <li className="currencyList-item-chart">
                  <Line height={60} data={chartData} options={chartOptions} />
                  </li>
                  <li className="currencyList-item-value">324.3€</li>
              </ul>
            </li>
            <li className="currencyList-item">
              <ul className="currencyList-item-content">
                  <li className="currencyList-item-title">EU</li>
                  <li className="currencyList-item-chart">
                  <Line height={60} data={chartData} options={chartOptions} />
                  </li>
                  <li className="currencyList-item-value">324.3€</li>
              </ul>
            </li>
          </ul> */}
        </aside>
        <section className="currencyDetail">
          <header className="currencyDetail-header">
            <section className="currencyDetail-info">
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
            <Line data={chartData} options={chartOptions} />
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
