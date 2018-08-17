import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Description from '../../components/description';

it('Description renders correctly', () => {
  const wrapper = shallow(<Description color="#000" text="This is a test description" />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
