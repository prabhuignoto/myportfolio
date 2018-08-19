import React from 'react';
import Img from 'gatsby-image';
import { any } from 'prop-types';
import {
  Wrapper, ImageWrapper, Tagline, TaglineItem, Separator,
} from '../styles/profile';
import Clock from './clock';
import AboutMe from './aboutme';


const Profile = ({ profileImage }) => (
  <Wrapper>
    {/* <ImageWrapper>
      <Img sizes={profileImage.sizes} className="profile-image-wrapper" />
    </ImageWrapper> */}
    <Tagline>
      <TaglineItem>
        {'Frontend engineer'}
      </TaglineItem>
      {/* <Separator className="is-hidden-mobile" /> */}
      <TaglineItem>
        {'Fullstack developer'}
      </TaglineItem>
    </Tagline>
    <AboutMe />
  </Wrapper>
);

Profile.propTypes = {
  profileImage: any,
};

export default Profile;
