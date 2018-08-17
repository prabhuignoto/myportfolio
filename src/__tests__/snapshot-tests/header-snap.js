import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/header';

it('Header renders correctly', () => {
  const wrapper = shallow(<Header siteTitle="Prabhu Murthy Portfolio" />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
