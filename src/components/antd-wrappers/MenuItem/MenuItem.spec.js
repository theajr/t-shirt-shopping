import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './MenuItem';

describe('<MenuItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<MenuItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
