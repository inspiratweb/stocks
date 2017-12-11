import reducer from '../../reducers/currencyDetail';
import * as types from '../../actions';

describe('currencyDetail reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currencyList: {}, selected: null,
    });
  });

  const initialState = {
    currencies: {
      AUD: {
        name: '',
        rates: { 0: 1.5659, 1: 1.5627, 2: 1.5619 },
      },
      BGN: {
        name: '',
        rates: { 0: 1.9558, 1: 1.9558, 2: 1.9558 },
      },
    },
  };

  it('should return the initial loaded state', () => {
    expect(reducer(initialState, {})).toEqual({
      currencyList: {
        currencies: {
          AUD: {
            name: '',
            rates: { 0: 1.5659, 1: 1.5627, 2: 1.5619 },
          },
          BGN: {
            name: '',
            rates: { 0: 1.9558, 1: 1.9558, 2: 1.9558 },
          },
        },
      },
      selected: null,
    });
  });
});
