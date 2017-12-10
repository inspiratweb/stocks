import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';


describe('<Button />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Button />);
  });
  it('renders without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should render a primary styled button', () => {
    expect(component.find('.button-primary')).toHaveLength(1);
  });

  describe('when passing a type secondary', () => {
    beforeEach(() => {
      component = shallow(<Button type="button-secondary" />);
    });
    it('should render a secondary styled button', () => {
      expect(component.find('.button-secondary')).toHaveLength(1);
    });
  });
});
