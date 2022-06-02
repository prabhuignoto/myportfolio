import React from "react";
import { Tagline, TaglineItem, TaglineText, Wrapper } from "../styles/profile";

function Profile() {
  return (
    <Wrapper>
      <Tagline className="is-hidden-mobile tagline">
        <TaglineItem color="#AD1A25">
          <TaglineText>Developer</TaglineText>
        </TaglineItem>
        <TaglineItem color="#37647D">
          <TaglineText>Designer</TaglineText>
        </TaglineItem>
        <TaglineItem color="#23212D">
          <TaglineText>Architect</TaglineText>
        </TaglineItem>
      </Tagline>
    </Wrapper>
  );
}

export default Profile;
