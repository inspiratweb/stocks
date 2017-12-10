import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartLine from './ChartLine';
import getValueFeedback from '../lib/valueFeedback';

class CurrencyListItem extends Component {
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
    const { code, values, onItemClick } = this.props;
    const valuesFeedback = getValueFeedback(values);

    return (
      <li
        className={this.renderItemClassName()}
        onClick={() => onItemClick(code)}
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
  values: PropTypes.objectOf(PropTypes.number).isRequired,
  onItemClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

CurrencyListItem.defaultProps = {
  selected: false,
};

export default CurrencyListItem;
