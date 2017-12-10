import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrencyDetailItem from '../components/CurrencyDetailItem';

const CurrencyDetail = ({ selectedCurrency }) => (
  <CurrencyDetailItem selectedCurrency={selectedCurrency} />
);

CurrencyDetail.propTypes = {
  selectedCurrency: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    rates: PropTypes.objectOf(PropTypes.number),
  }),
};

CurrencyDetail.defaultProps = {
  selectedCurrency: null,
};

const mapStateToProps = (state) => ({
  selectedCurrency: state.currencies.selected,
});

export default connect(mapStateToProps)(CurrencyDetail);
