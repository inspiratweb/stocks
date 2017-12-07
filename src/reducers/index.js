import { combineReducers } from 'redux';
import currencyDetail from './currencyDetail';

const currenciesApp = combineReducers({
  currencies: currencyDetail,
})

export default currenciesApp;
