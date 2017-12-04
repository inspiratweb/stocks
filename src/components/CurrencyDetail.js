import React, { Component } from 'react';

class CurrencyDetail extends Component {
  render() {
    return (
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
          {/* <Line data={chartData} options={chartOptions} /> */}
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
    );
  }
}

export default CurrencyDetail;
