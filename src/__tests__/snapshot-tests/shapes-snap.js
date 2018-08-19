import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Shapes from '../../components/shapes';
import HeroImage from '../mocks/hero-image.json';

it('Renders Shape correctly', () => {
  const wrapper = shallow(<Shapes heroImage={{
    sizes: HeroImage,
  }}
  />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
