import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Tools from '../../components/tools';

it('Tools renders correctly', () => {
  const wrapper = shallow(<Tools />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
