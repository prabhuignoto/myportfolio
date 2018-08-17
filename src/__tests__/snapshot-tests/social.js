import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Social from '../../components/social';

it('Social renders correctly', () => {
  const wrapper = shallow(<Social />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
