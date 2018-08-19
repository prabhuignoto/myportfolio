import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Navbar from '../../components/navbar';
import PrabhuLogo from '../mocks/prabhu-logo.json';

it('Renders navbar correctly', () => {
  const wrapper = shallow(<Navbar prabhuLogo={
    { sizes: PrabhuLogo }
  }
  />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
