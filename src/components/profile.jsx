import React from 'react';
import Styled from 'styled-components';
import Img from 'gatsby-image';
import ProfilePic from '../assets/profile-pic.png';

const Wrapper = Styled.figure`
  display: block;
  position: absolute;
  top: -5rem; */
  right: -3rem;
  margin-left: auto;
  margin-right:auto;
  top: -3rem;
`;

const ImageWrapper = Styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`;

const Profile = props => (
  <Wrapper>
    <ImageWrapper>
      <Img sizes={props.profileImage.sizes} className="profile-image-wrapper"/>
    </ImageWrapper>
  </Wrapper>
);

export default Profile;
