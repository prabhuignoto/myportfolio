import React from 'react';
import {
  Wrapper, Tagline, TaglineItem, TaglineText,
} from '../styles/profile';


const Profile = () => (
  <Wrapper>
    <Tagline className="is-hidden-mobile tagline">
      <TaglineItem color="#bfb2a6">
        <TaglineText>
          {'Developer'}
        </TaglineText>
      </TaglineItem>
      <TaglineItem>
        <TaglineText>
          {'Designer'}
        </TaglineText>
      </TaglineItem>
      <TaglineItem color="#ee694f">
        <TaglineText>
          {'Architect'}
        </TaglineText>
      </TaglineItem>
    </Tagline>
  </Wrapper>
);

export default Profile;
