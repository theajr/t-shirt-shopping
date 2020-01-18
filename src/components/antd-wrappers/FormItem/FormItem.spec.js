import React from 'react';
import { shallow } from 'enzyme';
import FormItem from './FormItem';

describe('<FormItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<FormItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
