import React from 'react';
import Img from 'gatsby-image';
import { any } from 'prop-types';
import { ImageWrapper, Links, Link as LinkItem } from '../styles/profile-image';

const ProfileImage = ({ profileImage }) => (
  <div>
    <ImageWrapper>
      <Img sizes={profileImage.sizes} className="profile-image-wrapper" />
    </ImageWrapper>
    <Links>
      <LinkItem>
        <a href="mailto:prabhu.m.murthy@gmail.com">
          {'@email me'}
        </a>
      </LinkItem>
    </Links>
  </div>
);

ProfileImage.propTypes = {
  profileImage: any,
};

export default ProfileImage;
