import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrencyDetailItem from '../components/CurrencyDetailItem';

class CurrencyDetail extends Component {
  render() {
    return <CurrencyDetailItem selectedCurrency={this.props.selectedCurrency} />
  }
}

CurrencyDetail.propTypes = {
  selectedCurrency: PropTypes.object,
};

const mapStateToProps = (state) => ({
  selectedCurrency: state.currencies.selected,
});

export default connect(
  mapStateToProps,
)(CurrencyDetail);
