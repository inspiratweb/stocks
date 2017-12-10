import React from 'react';
import { shallow } from 'enzyme';
import CurrencyDetailItem from '../../components/CurrencyDetailItem';

describe('<CurrencyDetailItem />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CurrencyDetailItem />);
  });
  it('renders without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should render a BlankSlate component', () => {
    expect(component.find('BlankSlate')).toHaveLength(1);
  });

  describe('when passing a selectedCurrency', () => {
    beforeEach(() => {
      const selectedCurrency = {
        code: 'WA',
        name: 'wadus name',
        rates: {
          0: 12, 1: 123, 2: 321, 3: 23,
        },
      };
      component = shallow(<CurrencyDetailItem
        selectedCurrency={selectedCurrency}
      />);

      it('should render a BlankSlate component', () => {
        expect(component.find('BlankSlate')).toHaveLength(1);
      });
    });
  });
});
