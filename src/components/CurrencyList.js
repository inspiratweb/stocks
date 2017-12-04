import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import CurrencyListItem from './CurrencyListItem';

class CurrencyList extends Component {
  renderList() {
    const { endpoint: { currencies } } = this.props;

    return Object.keys(currencies).map((key, index) => (
      <CurrencyListItem
        key={key}
        code={key}
        name={currencies[key].name}
        values={currencies[key].rates}
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

const mapStateToProps = (state) => ({
  endpoint: state
});

export default connect(mapStateToProps)(CurrencyList);
