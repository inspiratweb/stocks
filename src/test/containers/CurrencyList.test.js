import React from 'react';
import { shallow } from 'enzyme';
import { PureComponent as CurrencyList } from '../../containers/CurrencyList';


describe('<CurrencyList />', () => {
  const component = shallow(<CurrencyList
    currencyList={{
      WA: {
        name: 'wadus',
        rates: { 0: 12, 1: 23, 2: 32 },
      },
    }}
  />, { context: { showDetail: (state) => state } });

  it('renders without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('calls CurrencyListItem', () => {
    expect(component.find('CurrencyListItem')).toHaveLength(1);
  });
});
