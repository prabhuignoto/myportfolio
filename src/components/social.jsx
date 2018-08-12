import React, { Component } from 'react';
import {
  Wrapper, Item, IconWrapper,
} from '../styles/social';
import MailSVG from '../assets/envelope-solid.svg';
import { GithubSVG, LinkedinSVG, StackSVG } from '../styles/images.js';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper role="list">
        <Item role="listitem">
          <IconWrapper href="http://www.linkedin.com/in/prabhu-murthy-09b36637" target="new" title="LinkedIn">
            <img
              height="25px"
              width="25px"
              alt="linkedin"
              src={LinkedinSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
            {/* <Label>
              {'Linkedin'}
            </Label> */}
          </IconWrapper>
        </Item>
        <Item role="listitem">
          <IconWrapper href="http://github.com/prabhuignoto" target="new" title="Github">
            <img
              height="25px"
              width="25px"
              alt="github"
              src={GithubSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
            {/* <Label>
              {'Github'}
            </Label> */}
          </IconWrapper>
        </Item>
        <Item role="listitem">
          <IconWrapper href="http://stackoverflow.com/users/1329529/prabhu-murthy?tab=profile" target="new" title="StackOverflow">
            <img
              height="25px"
              width="25px"
              alt="stackoverflow"
              src={StackSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
            {/* <Label>
              {'StackOverflow'}
            </Label> */}
          </IconWrapper>
        </Item>
        <Item role="listitem">
          <IconWrapper href="mailto:prabhu.m.murthy@gmail.com" target="new" title="Get in Touch">
            <img
              height="25px"
              width="25px"
              alt="stackoverflow"
              src={MailSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
            {/* <Label>
              {'StackOverflow'}
            </Label> */}
          </IconWrapper>
        </Item>
      </Wrapper>
    );
  }
}

export default Social;
