import React from 'react';
import Img from 'gatsby-image';
import { any } from 'prop-types';
import {
  ImageWrapper,
  Wrapper,
} from '../styles/profile-image';

const ProfileImage = ({ profileImage }) => (
  <Wrapper>
    <ImageWrapper className="profile-img-wrapper">
      <Img
        sizes={profileImage.sizes}
        className="profile-image-wrapper"
        placeholderStyle={{ height: '100%', width: '100%' }}
      />
    </ImageWrapper>
    {/* <Links>
      <LinkItem>
        <a
          href="mailto:prabhu.m.murthy@gmail.com"
          style={{ color: '#404040', marginRight: '0.25rem', fontSize: '1rem' }}
        >
          {'Contact me'}
        </a>
      </LinkItem>
      <LinkItem>
        <a
          href="https://novoresume.com/a/prabhu.m.murthy.1"
          style={{ color: '#404040', marginRight: '0.25rem', fontSize: '1rem' }}
          target="_new"
        >
          {'View Resume'}
        </a>
      </LinkItem>
    </Links> */}
  </Wrapper>
);

ProfileImage.propTypes = {
  profileImage: any,
};

export default ProfileImage;
