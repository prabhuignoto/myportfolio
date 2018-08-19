import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Hero from '../../components/hero';
import PrabhuLogo from '../mocks/prabhu-logo.json';
import ProfileImage from '../mocks/profile-image.json';
import HeroImage from '../mocks/hero-image.json';

it('Renders Hero correctly', () => {
  const wrapper = shallow(<Hero
    prabhuLogo={
    { sizes: PrabhuLogo }
  }
    profileImage={
    { sizes: ProfileImage }
  }
    heroImage={
    { sizes: HeroImage }
  }
  />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
