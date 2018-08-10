import React, { Component } from 'react';
import {
  Wrapper, Icon, Item, IconWrapper, Label,
} from '../styles/social';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="box is-paddingless"
        style={{ background: 'transparent' }}
      >
        <Wrapper role="list">
          <Item role="listitem">
            <IconWrapper href="http://www.linkedin.com/in/prabhu-murthy-09b36637" target="new">
              <Icon type="linkedin" />
              <Label>
                {'Linkedin'}
              </Label>
            </IconWrapper>
          </Item>
          <Item role="listitem">
            <IconWrapper href="http://github.com/prabhuignoto" target="new">
              <Icon type="github" />
              <Label>
                {'brahmi'}
              </Label>
            </IconWrapper>
          </Item>
          <Item role="listitem">
            <IconWrapper href="http://stackoverflow.com/users/1329529/prabhu-murthy?tab=profile" target="new">
              <Icon type="stack" />
              <Label>
                {'Stack'}
              </Label>
            </IconWrapper>
          </Item>
        </Wrapper>
      </div>
    );
  }
}

export default Social;
