import React from 'react';
import Img from 'gatsby-image';
import { any } from 'prop-types';
import {
  ImageWrapper, Links, IconWrapper, Link as LinkItem, Icon, Wrapper,
} from '../styles/profile-image';
import { At, Mobile } from '../styles/images';

const ProfileImage = ({ profileImage }) => (
  <Wrapper>
    <ImageWrapper>
      <Img sizes={profileImage.sizes} className="profile-image-wrapper" />
    </ImageWrapper>
    <Links>
      <LinkItem>
        <IconWrapper>
          <Icon src={At} alt="at-email" />
        </IconWrapper>
        <a href="mailto:prabhu.m.murthy@gmail.com" style={{ color: '#404040', marginRight: '0.25rem', fontSize: '1.25rem' }}>
          {'Email me'}
        </a>
      </LinkItem>
      {/* <LinkItem>
        <IconWrapper>
          <Icon src={Mobile} alt="mobile" />
        </IconWrapper>
        {/* <span> */}
      {/* {'+91 9538928549'} */}
      {/* </span> */}
      {/* </LinkItem>  */}
    </Links>
  </Wrapper>
);

ProfileImage.propTypes = {
  profileImage: any,
};

export default ProfileImage;
