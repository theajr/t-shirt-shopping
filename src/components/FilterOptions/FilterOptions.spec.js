import React from 'react';
import { shallow } from 'enzyme';
import FilterOptions from './FilterOptions';

describe('<FilterOptions />', () => {
  test('renders', () => {
    const wrapper = shallow(<FilterOptions />);
    expect(wrapper).toMatchSnapshot();
  });
});
