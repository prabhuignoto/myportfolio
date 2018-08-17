import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Footer from '../../components/footer';

it('Footer renders correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
