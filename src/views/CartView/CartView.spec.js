import React from 'react';
import { shallow } from 'enzyme';
import CartView from './CartView';

describe('<CartView />', () => {
  test('renders', () => {
    const wrapper = shallow(<CartView />);
    expect(wrapper).toMatchSnapshot();
  });
});
