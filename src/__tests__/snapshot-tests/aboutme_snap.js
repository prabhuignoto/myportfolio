import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AboutMe from '../../components/aboutme';

it('aboutme renders correctly', () => {
  const wrapper = shallow(<AboutMe />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
