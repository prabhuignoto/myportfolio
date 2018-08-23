import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Clock from '../../components/clock';

it('Render clock correctly', () => {
  const wrapper = shallow(<Clock />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
