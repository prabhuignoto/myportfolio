import React from 'react';
import {
  Wrapper, Tagline, TaglineItem, TaglineText,
} from '../styles/profile';


const Profile = () => (
  <Wrapper>
    <Tagline>
      <TaglineItem>
        <TaglineText color="">
          {'Developer'}
        </TaglineText>
      </TaglineItem>
      {/* <Separator className="is-hidden-mobile" /> */}
      <TaglineItem color="">
        <TaglineText>
          {'Designer'}
        </TaglineText>
      </TaglineItem>
      {/* <Separator className="is-hidden-mobile" /> */}
      <TaglineItem color="">
        <TaglineText>
          {'Architect'}
        </TaglineText>
      </TaglineItem>
    </Tagline>
  </Wrapper>
);

export default Profile;
