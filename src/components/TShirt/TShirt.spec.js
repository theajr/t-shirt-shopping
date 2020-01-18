import React from 'react';
import { shallow } from 'enzyme';
import TShirt from './TShirt';

describe('<TShirt />', () => {
  test('renders', () => {
    const wrapper = shallow(<TShirt />);
    expect(wrapper).toMatchSnapshot();
  });
});
