import React from 'react';
import {
  Wrapper, Tagline, TaglineItem,
} from '../styles/profile';


const Profile = () => (
  <Wrapper>
    <Tagline>
      <TaglineItem>
        {'Frontend engineer'}
      </TaglineItem>
      {/* <Separator className="is-hidden-mobile" /> */}
      <TaglineItem>
        {'Fullstack developer'}
      </TaglineItem>
      {/* <Separator className="is-hidden-mobile" /> */}
      <TaglineItem>
        {'UI Architect'}
      </TaglineItem>
    </Tagline>
  </Wrapper>
);

export default Profile;
