import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartLine from './ChartLine';
import getValueFeedback from '../lib/getValueFeedback';

class CurrencyDetail extends Component {
  renderProgression(valuesFeedback) {
    const rating = Math.trunc((valuesFeedback.currentValue - valuesFeedback.lastWeekValue) * 10000) / 10000;
    const ratingPercent = Math.trunc((((valuesFeedback.currentValue / valuesFeedback.lastWeekValue) - 1) * 100) * 100) / 100;
    const className = `currencyDetail-info-rate highlight-${valuesFeedback.feedback}`;

    return (
      <p><span className={className}>{rating} ({ratingPercent}%)</span>TODAY</p>
    )
  }

  renderCurrencyDetailState() {
    if (this.props.selectedCurrency) {
      // Showing selected detail
      const { selectedCurrency } = this.props;
      const valuesFeedback = getValueFeedback(selectedCurrency.values);

      return (
        <section className="currencyDetail">
          <header className="currencyDetail-header">
            <section className="currencyDetail-info">
              <h3 className="currencyDetail-info-value">{valuesFeedback.currentValue}€</h3>
              {this.renderProgression(valuesFeedback)}
            </section>
            <section className="currencyDetail-data">
              <p className="currencyDetail-data-title">{selectedCurrency.code}</p>
              <p>{selectedCurrency.name}</p>
            </section>
          </header>
          <section className="currencyDetail-chart">
            <ChartLine
              values={selectedCurrency.values}
              feedback={valuesFeedback.feedback}
            />
          </section>
          {this.renderDisclaimer()}
        </section>
      )
    } else {
      return (
        // Showing blank state
        <section className="currencyDetail">
          <div>BLANK</div>
        </section>
      )
    }
  }

  renderDisclaimer() {
    return (
      <footer className="currencyDetail-footer">
        <section className="currencyDetail-disclaimer">
          <h4 className="currencyDetail-disclaimer-title">About</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio deleniti odit quidem accusantium a mollitia, voluptates cupiditate tenetur consequuntur soluta eos, ad voluptatem eum omnis vero illum nobis corrupti.
          </p>
          <p>Soluta quaerat sed maiores beatae, magnam facere cum consectetur nam velit ipsum dolore, iste, quis, incidunt eius. Laboriosam iure vitae, quos nihil, quae dolores mollitia numquam eum tenetur iusto quaerat!
          </p>
          <p>Doloribus ex dignissimos reprehenderit provident. Minima delectus, neque quos officia mollitia consequatur. Rem eius, ex placeat! Aspernatur nesciunt consequuntur in magni, hic reprehenderit iure molestias, fuga culpa, non quia repellat.
          </p>
        </section>
      </footer>
    );
  }

  render() {
    return this.renderCurrencyDetailState();
  }
}

CurrencyDetail.propTypes = {
  selectedCurrency: PropTypes.object,
};

export default CurrencyDetail;
