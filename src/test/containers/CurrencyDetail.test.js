import React from 'react';
import { shallow } from 'enzyme';
import { PureComponent as CurrencyDetail } from '../../containers/CurrencyDetail';


describe('<CurrencyDetail />', () => {
  const component = shallow(<CurrencyDetail />);

  it('renders without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('calls CurrencyDetailItem', () => {
    expect(component.find('CurrencyDetailItem')).toHaveLength(1);
  });
});
