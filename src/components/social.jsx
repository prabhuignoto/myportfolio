import React from 'react';
import {
  Wrapper, Icon, Item, IconWrapper,
} from '../styles/social';

const Social = () => (
  <div
    className="box is-paddingless"
    style={{ background: 'transparent' }}
  >
    <Wrapper role="list">
      <Item role="listitem">
        <IconWrapper href="http://www.linkedin.com/in/prabhu-murthy-09b36637" target="new">
          <Icon type="linkedin" />
        </IconWrapper>
      </Item>
      <Item role="listitem">
        <IconWrapper href="http://github.com/prabhuignoto" target="new">
          <Icon type="github" />
        </IconWrapper>
      </Item>
      <Item role="listitem">
        <IconWrapper href="http://stackoverflow.com/users/1329529/prabhu-murthy?tab=profile" target="new">
          <Icon type="stack" />
        </IconWrapper>
      </Item>
    </Wrapper>
  </div>
);

export default Social;
