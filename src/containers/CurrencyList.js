import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showCurrencyDetail } from '../actions';
import CurrencyListItem from '../components/CurrencyListItem';

class CurrencyList extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { selectedCode: '' };
  }

  handleClick(code) {
    this.props.handleClick(code);
    this.setState({ selectedCode: code });
  }

  render() {
    const { currencyList } = this.props;

    return Object.keys(currencyList).map((key, index) => (
      <CurrencyListItem
        key={key}
        code={key}
        name={currencyList[key].name}
        values={currencyList[key].rates}
        onItemClick={this.handleClick}
        selected={key===this.state.selectedCode}
      />
    ));
  }
}

CurrencyList.propTypes = {
  currencyList: PropTypes.object,
};

const mapStateToProps = (state) => ({
  currencyList: state.currencies.currencyList,
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
