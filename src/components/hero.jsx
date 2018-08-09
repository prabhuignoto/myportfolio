import React, { Component } from 'react';
import Styled from 'styled-components';
import Img from 'gatsby-image';
import NavBar from './navbar';
import AboutMe from './aboutme';
import Shapes from './shapes';
// import Backdrop from '../assets/paper-3164718.jpg';
import Social from './social';

const Hero = Styled.section`
  position: relative;
`;

const HeroBackdrop = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

class hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      // background: 'linear-gradient(45deg, rgba(232,241,242,1) 0%, rgba(36,123,160,1) 100%)',
      position: 'relative',
    };
  }

  render() {
    return (
      <Hero className="hero is-large" style={this.style}>
        <HeroBackdrop>
          <Img sizes={this.props.heroImage.sizes} className="priored" outerWrapperClassName="reddit" />
        </HeroBackdrop>
        <div className="hero-head">
          <NavBar />
        </div>
        <div className="hero-body">
          <Shapes />
          <div className="container" style={{ zIndex: '300' }}>
            <div className="columns is-centered is-multiline">
              <div className="column is-2" />
              <div className="column is-8">
                <AboutMe profileImage={this.props.profileImage} />
              </div>
              <div className="column is-2" />
              <div className="column is-6-desktop">
                <Social linkedinSVG={this.props.linkedinSVG}/>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          {'placeholder'}
        </div>
      </Hero>
    );
  }
}

hero.propTypes = {
};

export default hero;
