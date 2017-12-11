import React from 'react';
import { shallow } from 'enzyme';
import CurrencyListItem from '../../components/CurrencyListItem';

describe('<CurrencyListItem />', () => {
  let component;
  let clickMock;
  beforeEach(() => {
    clickMock = jest.fn();
    component = shallow(<CurrencyListItem
      code="WA"
      values={{
        0: 12, 1: 123, 2: 321, 3: 23,
      }}
      onItemClick={clickMock}
    />);
  });

  it('renders without crashing', () => {
    expect(component).toHaveLength(1);
  });

  describe('when click on a list element', () => {
    it('should call onItemClick', () => {
      component.simulate('click');
      expect(clickMock).toHaveBeenCalled();
    });
  });
});
