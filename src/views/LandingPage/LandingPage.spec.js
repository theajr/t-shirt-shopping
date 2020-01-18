import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
