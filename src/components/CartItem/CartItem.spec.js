import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';

describe('<CartItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<CartItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
