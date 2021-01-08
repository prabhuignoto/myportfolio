import Styled from '@emotion/styled';
import Img from 'gatsby-image';
import { object } from 'prop-types';
import React, { Component } from 'react';
import AboutMe from './aboutme';
import NavBar from './navbar';
import Profile from './profile';
import Shapes from './shapes';

const Hero = Styled('section')`
  position: relative;
`;

const HeroBackdrop = Styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { heroImage, profileImage, prabhuLogo } = this.props;

    debugger;
    return (
      <Hero className="hero is-medium">
        <div className="hero-head">
          <NavBar prabhuLogo={prabhuLogo} />
        </div>
        <div className="hero-body" style={{ position: 'relative' }}>
          <div className="hero-backdrop">
            {/* <Img
              fluid={heroImage.childImageSharp.fluid}
              className="hero-image-wrapper"
              outerWrapperClassName="hero-image-outer-wrapper"
              placeholderStyle={{
                width: '100%',
                height: '40rem',
              }}
            /> */}
          </div>
          <div className="hero-backdrop">
            <Shapes heroImage={heroImage.childImageSharp.fluid} />
          </div>
          <div className="container">
            <div className="columns is-centered is-multiline">
              <div
                className="column is-12-desktop is-9-fullhd is-9-tablet"
                style={{
                  background: 'rgba(255,255,255, 0.97)',
                  borderRadius: '4px',
                  padding: '0rem 0rem 0rem',
                  boxShadow: '0 0 10px 1px rgba(0,0,0,0.5)',
                }}
              >
                <div className="columns is-centered is-multiline is-gapless">
                  <div className="column is-12-desktop is-12-tablet">
                    <AboutMe />
                  </div>
                  <div className="column is-12-desktop is-12-tablet">
                    <Profile />
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="hero-foot" />
      </Hero>
    );
  }
}

hero.propTypes = {
  heroImage: object.isRequired,
  profileImage: object.isRequired,
  prabhuLogo: object.isRequired,
};

export default hero;
