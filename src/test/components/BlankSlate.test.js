import React from 'react';
import { shallow } from 'enzyme';
import BlankSlate from '../../components/BlankSlate';


describe('<BlankSlate />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<BlankSlate />);
  });
  it('renders without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should be rendered', () => {
    expect(component.find('p')).toHaveLength(1);
  });

  it('should be rendered without text', () => {
    expect(component.find('p').text()).toBe('');
  });

  describe('when passing a copy', () => {
    beforeEach(() => {
      component = shallow(<BlankSlate copy="test" />);
    });
    it('should be rendered using copy prop as text', () => {
      expect(component.find('p').text()).toBe('test');
    });
  });
});
