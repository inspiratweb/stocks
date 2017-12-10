import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencyList from '../containers/CurrencyList';
import CurrencyDetail from '../containers/CurrencyDetail';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { showDetail: false };
    this.showDetail = this.showDetail.bind(this);
  }

  getChildContext() {
    return { showDetail: this.showDetail };
  }

  showDetail(state) {
    this.setState({ showDetail: state });
  }

  renderDetailClassName() {
    const baseClass = 'layout';
    return this.state.showDetail ? `${baseClass} showDetail` : baseClass;
  }

  render() {
    return (
      <div className={this.renderDetailClassName()}>
        <aside className="layout-aside">
          <CurrencyList />
        </aside>
        <div className="layout-main">
          <CurrencyDetail />
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  showDetail: PropTypes.func,
};

export default App;
