import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import BuiltWith from '../../components/builtwith';

it('aboutme renders correctly', () => {
  const wrapper = shallow(<BuiltWith tech={['react', 'typescript', 'gatsby']} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
