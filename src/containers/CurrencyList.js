import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showCurrencyDetail } from '../actions';
import CurrencyListItem from '../components/CurrencyListItem';

class CurrencyList extends Component {
  render() {
    const { endpoint, handleClick } = this.props;

    return Object.keys(endpoint).map((key, index) => (
      <CurrencyListItem
        key={key}
        code={key}
        name={endpoint[key].name}
        values={endpoint[key].rates}
        onItemClick={handleClick}
      />
    ));
  }
}

CurrencyList.propTypes = {
  endpoint: PropTypes.object,
};

const mapStateToProps = (state) => ({
  endpoint: state.currencies.currencyList,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (code) => (
    dispatch(showCurrencyDetail(code))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyList);
