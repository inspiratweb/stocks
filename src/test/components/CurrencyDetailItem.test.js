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
    const selectedCurrency = {
      code: 'WA',
      name: 'wadus name',
      rates: {
        0: 12, 1: 123, 2: 321, 3: 23,
      },
    };
    beforeEach(() => {
      component = shallow(<CurrencyDetailItem
        selectedCurrency={selectedCurrency}
      />, { context: { showDetail: (state) => state } });
    });

    it('should render a BlankSlate component', () => {
      expect(component.find('BlankSlate')).toHaveLength(0);
    });

    describe('when click on back link', () => {
      it('should show showDetail context as true', () => {
        expect(component.context().showDetail(true)).toBeTruthy();
      });

      it('should change showDetail context to false', () => {
        component.instance().handleBackClick();
        expect(component.context().showDetail(false)).toBeFalsy();
      });
    });
  });
});
