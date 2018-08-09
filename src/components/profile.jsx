import React from 'react';
import Styled from 'styled-components';
import Img from 'gatsby-image';
import ProfilePic from '../assets/profile-pic.png';

const Wrapper = Styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* top: -5rem; */ */
  /* right: -3rem; */
  margin-left: auto;
  margin-right:auto;
  /* top: -3rem; */
`;

const ImageWrapper = Styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`;

const Tagline = Styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  /* background: rgba(255,255,255,0.7); */
  border-radius: 3px;
  flex-wrap: wrap;
`;

const TaglineItem = Styled.li`
  margin: 0.5rem 2rem;
  font-size: 2.5rem;
  font-weight: 400;
  position: relative;
  color: #fff;
  text-shadow: 2px 1px 2px rgba(0,0,0,0.9);
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
`;

const Separator = Styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.8);
`;

const Profile = props => (
  <Wrapper>
    <ImageWrapper>
      <Img sizes={props.profileImage.sizes} className="profile-image-wrapper"/>
    </ImageWrapper>
    <Tagline>
      <TaglineItem>Developer</TaglineItem>
      <Separator className="is-hidden-mobile"></Separator>
      <TaglineItem>Designer</TaglineItem>
    </Tagline>
  </Wrapper>
);

export default Profile;
