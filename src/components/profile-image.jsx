import React from 'react';
import Img from 'gatsby-image';
import { any } from 'prop-types';
import { ImageWrapper, Links, Link } from '../styles/profile-image';

const ProfileImage = ({ profileImage }) => (
  <div>
    <ImageWrapper>
      <Img sizes={profileImage.sizes} className="profile-image-wrapper" />
    </ImageWrapper>
    <Links>
      <Link href="mailto:prabhu.m.murthy@gmail.com">
        {'@ Get in Touch'}
      </Link>
    </Links>
  </div>
);

ProfileImage.propTypes = {
  profileImage: any,
};

export default ProfileImage;
