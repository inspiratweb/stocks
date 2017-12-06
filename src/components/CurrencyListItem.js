import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartLine from './ChartLine';
import getValueFeedback from '../lib/getValueFeedback';

class CurrencyListItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { code, name, values } = this.props;
    this.props.selectedCurrency({ code, name, values });
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

  renderItemClassName() {
    let className = 'currencyList-item';
    className += this.props.selected ? ' active' : '';
    return className;
  }

  render() {
    const { code, values } = this.props;
    const valuesFeedback = getValueFeedback(values);

    return (
      <li
        className={this.renderItemClassName()}
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
  selectedCurrency: PropTypes.func,
  selected: PropTypes.bool,
};

export default CurrencyListItem;
