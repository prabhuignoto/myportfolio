import React from 'react';
import {
  Wrapper, Icon, Label, Item,
} from '../styles/social';

const Social = () => (
  <div
    className="box"
    style={{ background: '#fff' }}
  >
    <Wrapper>
      <Item>
        <Icon type="linkedin" />
        {/* <Label>
          {'Linkedin'}
        </Label> */}
      </Item>
      <Item>
        <Icon type="github" />
        {/* <Label>
          {'Github'}
        </Label> */}
      </Item>
      <Item>
        <Icon type="stack" />
        {/* <Label>
          {'StackOverflow'}
        </Label> */}
      </Item>
    </Wrapper>
  </div>
);

export default Social;
