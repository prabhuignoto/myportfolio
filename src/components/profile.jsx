import React from 'react';
import Styled from 'styled-components';
import ProfilePic from '../assets/profile-pic.png';

const Wrapper = Styled.figure`
  display: block;
  position: absolute;
  width: 10rem;
  height: 10rem;
  /* left: -5rem;
  top: -5rem; */
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right:auto;
  bottom: -5rem;
`;

const Image = Styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-image: url(${ProfilePic});
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);
  background-repeat: no-repeat;
  filter: grayscale(100%);
  cursor: pointer;
  &:hover {
    filter: grayscale(0%);
  }
`;

const Profile = () => (
  <Wrapper>
    <Image />
  </Wrapper>
);

export default Profile;
