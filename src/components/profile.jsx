import React from 'react';
import {
  Wrapper, Tagline, TaglineItem, TaglineText,
} from '../styles/profile';


const Profile = () => (
  <Wrapper>
    <Tagline className="is-hidden-mobile tagline">
      <TaglineItem color="#227B9A">
        <TaglineText>
          {'Developer'}
        </TaglineText>
      </TaglineItem>
      <TaglineItem color="#5EB4CE">
        <TaglineText>
          {'Designer'}
        </TaglineText>
      </TaglineItem>
      <TaglineItem color="#A989C2">
        <TaglineText>
          {'Architect'}
        </TaglineText>
      </TaglineItem>
    </Tagline>
  </Wrapper>
);

export default Profile;
