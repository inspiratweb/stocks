import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MarketListItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('hola');
    return <button>asdasd</button>;
  }

  render() {
    const { code, values } = this.props;
    console.log(values);

    return (
      <li
        className="currencyList-item"
        onClick={this.handleClick}
      >
        <ul className="currencyList-item-content">
          <li className="currencyList-item-title">{code}</li>
          <li className="currencyList-item-chart">
            chart
            {/* <Line height={60} data={chartData} options={chartOptions} /> */}
          </li>
          <li className="currencyList-item-value">324.3€</li>
        </ul>
      </li>
    );
  }
}

MarketListItem.propTypes = {
  code: PropTypes.string.isRequired,
  values: PropTypes.object,
};

export default MarketListItem;
