import React from 'react';
import {
  Wrapper, Tagline, TaglineItem, TaglineText,
} from '../styles/profile';


const Profile = () => (
  <Wrapper>
    <Tagline className="is-hidden-mobile">
      <TaglineItem color="#bfb2a6">
        <TaglineText>
          {'Developer'}
        </TaglineText>
      </TaglineItem>
      {/* <Separator className="is-hidden-mobile" /> */}
      <TaglineItem>
        <TaglineText>
          {'Designer'}
        </TaglineText>
      </TaglineItem>
      {/* <Separator className="is-hidden-mobile" /> */}
      <TaglineItem color="#ee694f">
        <TaglineText>
          {'Architect'}
        </TaglineText>
      </TaglineItem>
    </Tagline>
  </Wrapper>
);

export default Profile;
