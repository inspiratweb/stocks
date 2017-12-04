import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarketListItem from './MarketListItem';

class MarketList extends Component {
  renderList() {
    const { endpoint } = this.props;

    return Object.keys(endpoint).map((key, index) => (
      <MarketListItem
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

MarketList.propTypes = {
  endpoint: PropTypes.object,
};

export default MarketList;
