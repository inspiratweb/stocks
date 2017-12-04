import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencyListItem from './CurrencyListItem';

class CurrencyList extends Component {
  renderList() {
    const { endpoint } = this.props;

    return Object.keys(endpoint).map((key, index) => (
      <CurrencyListItem
        key={key}
        code={key}
        name={endpoint[key].name}
        values={endpoint[key].rates}
      />
    ));
  }

  render() {
    return (
      <ul className="currencyList">
        {this.renderList()}
      </ul>
    );
  }
}

CurrencyList.propTypes = {
  endpoint: PropTypes.object,
};

export default CurrencyList;
