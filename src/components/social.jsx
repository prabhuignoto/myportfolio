import React from 'react';
import {
  Wrapper, Icon, Item, IconWrapper, Label
} from '../styles/social';
import Img from 'gatsby-image';

const Social = props => (
  <div
    className="box is-paddingless"
    style={{ background: 'transparent' }}
  >
    <Wrapper role="list">
      <Item role="listitem">
        <IconWrapper href="http://www.linkedin.com/in/prabhu-murthy-09b36637" target="new">
          <Icon type="linkedin" />
          <Label>Linkedin</Label>
          {/* <Img sizes={props.linkedinSVG.sizes} /> */}
        </IconWrapper>
      </Item>
      <Item role="listitem">
        <IconWrapper href="http://github.com/prabhuignoto" target="new">
          <Icon type="github" />
          <Label>Github</Label>
        </IconWrapper>
      </Item>
      <Item role="listitem">
        <IconWrapper href="http://stackoverflow.com/users/1329529/prabhu-murthy?tab=profile" target="new">
          <Icon type="stack" />
          <Label>Stack</Label>
        </IconWrapper>
      </Item>
    </Wrapper>
  </div>
);

export default Social;
