import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarketListItem from './MarketListItem';

class MarketList extends Component {
  renderList() {
    const { endpoint } = this.props;

    return Object.entries(endpoint.rates).map((key) => (
      <MarketListItem
        key={key[0]}
        code={key[0]}
        current={key[1].current_rate}
        last={key[1].last_rate}
      />
    ));
  }

  render() {
    const { endpoint } = this.props;

    return (
      <div>
        <h1>{endpoint.date}</h1>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

MarketList.propTypes = {
  endpoint: PropTypes.object,
};

export default MarketList;
