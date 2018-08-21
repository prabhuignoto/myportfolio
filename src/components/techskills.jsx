import React, { Component } from 'react';
import Img from 'gatsby-image';
// import ScrollReveal from 'scrollreveal';
import { Wrapper, ImageWrapper } from '../styles/techskills';
import SectionHeader from './section-header';
import Description from './description';

export default class techskills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();
  }

  componentDidMount() {
    // ScrollReveal().reveal(this.ref.current, {
    //   delay: 200,
    //   duration: 1000,
    //   scale: 0.85,
    //   opacity: 0.5,
    // });
  }

  render() {
    return (
      <Wrapper className="section">
        <div className="container" ref={this.ref} style={{ width: '100%' }}>
          <SectionHeader title="My SKills" color="#404040" />
          <Description text="Building Applications with strong foundations is very essential for any robust web applications. I am skilled in these areas and i meticulously follow these principles during the design and development." color="#746764" />
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
