import React, { Component } from 'react';
import Img from 'gatsby-image';
// import ScrollReveal from 'scrollreveal';
import { shape } from 'prop-types';
import { Wrapper, ImageWrapper } from '../styles/techskills';
import SectionHeader from './section-header';
import Description from './description';
import ImgType from '../types';

class TechSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();
  }

  render() {
    const { designPicture } = this.props;
    return (
      <Wrapper className="section">
        <div className="container" ref={this.ref} style={{ width: '100%' }}>
          <SectionHeader title="Skills" color="#AD1A25" />
          <Description
            text="Building Applications with strong foundations is very essential for any robust web applications. I am skilled in these areas and i meticulously follow these principles during the design and development."
            color="#746764"
          />
          <ImageWrapper>
            <Img
              sizes={designPicture.sizes}
              className="design-image-wrapper"
              outerWrapperClassName="design-image-outer-wrapper"
              imgStyle={{ objectFit: 'contain' }}
              placeholderStyle={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '50vh',
                width: '100%',
              }}
            />
          </ImageWrapper>
        </div>
      </Wrapper>
    );
  }
}

TechSkills.propTypes = {
  designPicture: shape(ImgType).isRequired,
};

export default TechSkills;
