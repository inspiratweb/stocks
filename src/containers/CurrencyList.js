import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import showCurrencyDetail from '../actions';
import CurrencyListItem from '../components/CurrencyListItem';

class CurrencyList extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { selectedCode: '' };
  }

  handleClick(code) {
    this.props.handleClick(code);
    this.context.showDetail(true);
    this.setState({ selectedCode: code });
  }

  renderCurrencyList() {
    const { currencyList } = this.props;

    return Object.keys(currencyList).map((key) => (
      <CurrencyListItem
        key={key}
        code={key}
        values={currencyList[key].rates}
        onItemClick={this.handleClick}
        selected={key === this.state.selectedCode}
      />
    ));
  }

  render() {
    return (
      <ul className="currencyList">
        {this.renderCurrencyList()}
      </ul>
    );
  }
}

CurrencyList.propTypes = {
  currencyList: PropTypes.shape({
    name: PropTypes.string,
    rates: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};

CurrencyList.contextTypes = {
  showDetail: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currencyList: state.currencies.currencyList,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (code) => (
    dispatch(showCurrencyDetail(code))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyList);

export { CurrencyList as PureComponent };
