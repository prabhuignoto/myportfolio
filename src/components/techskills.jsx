import React, { Component } from 'react';
import Img from 'gatsby-image';
import { Wrapper, ImageWrapper } from '../styles/techskills';
import SectionHeader from './section-header';
import Description from './description';

export default class techskills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper className="section">
        <div className="container">
          <SectionHeader title="My SKills" />
          <Description text="I design and develop apps that are beautiful, responsive and highly performant. Here are my recent works" color="#006494" />
          <ImageWrapper>
            <Img
              sizes={this.props.designPicture.sizes}
              className="design-image-wrapper"
              outerWrapperClassName="design-image-outer-wrapper"
              imgStyle={{ objectFit: 'contain' }}
            />
          </ImageWrapper>
        </div>
      </Wrapper>
    );
  }
}
