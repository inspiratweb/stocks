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
    return (
      <li onClick={this.handleClick}>
        {this.props.code}
        {this.props.current}
        {this.props.last}
      </li>
    );
  }
}

MarketListItem.propTypes = {
  code: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  last: PropTypes.number.isRequired,
};
export default MarketListItem;
