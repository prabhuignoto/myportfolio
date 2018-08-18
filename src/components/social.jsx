import React, { Component } from 'react';
import {
  Wrapper, Item, IconWrapper,
} from '../styles/social';
import MailSVG from '../assets/envelope-solid.svg';
import { GithubSVG, LinkedinSVG, StackSVG, TwitterSVG } from '../styles/images.js';

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
              height="20px"
              width="20px"
              alt="linkedin"
              src={LinkedinSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
          </IconWrapper>
        </Item>
        <Item role="listitem">
          <IconWrapper href="http://github.com/prabhuignoto" target="new" title="Github">
            <img
              height="20px"
              width="20px"
              alt="github"
              src={GithubSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
          </IconWrapper>
        </Item>
        <Item role="listitem">
          <IconWrapper href="http://stackoverflow.com/users/1329529/prabhu-murthy?tab=profile" target="new" title="StackOverflow">
            <img
              height="20px"
              width="20px"
              alt="stackoverflow"
              src={StackSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
          </IconWrapper>
        </Item>
        <Item role="listitem">
          <IconWrapper href="https://twitter.com/prabhumurthy2" target="new" title="Twitter">
            <img
              height="20px"
              width="20px"
              alt="twitter"
              src={TwitterSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
          </IconWrapper>
        </Item>
        <Item role="listitem">
          <IconWrapper href="mailto:prabhu.m.murthy@gmail.com" target="new" title="Get in Touch">
            <img
              height="20px"
              width="20px"
              alt="stackoverflow"
              src={MailSVG}
              style={{ marginBottom: 0, marginRight: '0.25rem' }}
            />
          </IconWrapper>
        </Item>
      </Wrapper>
    );
  }
}

export default Social;
