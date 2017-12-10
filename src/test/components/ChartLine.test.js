import React from 'react';
import { shallow } from 'enzyme';
import ChartLine from '../../components/ChartLine';

describe('<ChartLine />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ChartLine values={{ 0: 23, 1: 32 }} />);
  });
  it('renders without crashing', () => {
    expect(component).toHaveLength(1);
  });

  it('should render a Line component', () => {
    expect(component.find('Line')).toHaveLength(1);
  });
});
