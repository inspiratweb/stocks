import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('<App />', () => {
  const component = shallow(<App />);
  it('renders without crashing', () => {
    expect(component).toHaveLength(1);
  });

  describe('should set showDetail state initially as false', () => {
    it('when testing state by default', () => {
      expect(component.state().showDetail).toBeFalsy();
    });

    it('when testing context', () => {
      component.instance().getChildContext();
      expect(component.state().showDetail).toBeFalsy();
    });
  });

  describe('calling showDetail()', () => {
    it('should set showDetail state as true', () => {
      component.instance().showDetail(true);
      expect(component.state().showDetail).toBeTruthy();
    });
  });
});
