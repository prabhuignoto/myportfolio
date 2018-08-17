import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SectionHeader from '../../components/section-header';

it('SectionHeader renders correctly', () => {
  const wrapper = shallow(<SectionHeader title="Prabhu Murthy Portfolio" color="#ddd" />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
