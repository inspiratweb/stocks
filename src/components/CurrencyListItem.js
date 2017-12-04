import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartLine from './ChartLine';

class CurrencyListItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('hola');
    return <button>asdasd</button>;
  }

  getValueFeedback() {
    const { values } = this.props;
    const currentValue = values[Object.keys(values).length-1];
    const lastWeekValue = values[0];
    const feedback = currentValue >= lastWeekValue ? 'positive' : 'negative';

    return { currentValue, lastWeekValue, feedback };
  }

  renderLastValue(value, feedback) {
    return (
      <li className={`currencyList-item-value highlight-${feedback}`}>
        {value}€
      </li>
    );
  }

  renderChart(values, feedback) {
    return (
      <ChartLine
        height={60}
        values={values}
        feedback={feedback}
      />
    );
  }

  render() {
    const { code, values } = this.props;
    const valuesFeedback = this.getValueFeedback();

    return (
      <li
        className="currencyList-item"
        onClick={this.handleClick}
      >
        <ul className="currencyList-item-content">
          <li className="currencyList-item-title">{code}</li>
          <li className="currencyList-item-chart">
            {this.renderChart(values, valuesFeedback.feedback)}
          </li>
          {this.renderLastValue(valuesFeedback.currentValue, valuesFeedback.feedback)}
        </ul>
      </li>
    );
  }
}

CurrencyListItem.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string,
  values: PropTypes.object,
};

export default CurrencyListItem;
