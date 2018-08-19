import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Profile from '../../components/profile';
import ProfileImage from '../mocks/profile-image.json';

it('Profile view renders correctly', () => {
  const wrapper = shallow(<Profile profileImage={{
    sizes: ProfileImage,
  }}
  />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
