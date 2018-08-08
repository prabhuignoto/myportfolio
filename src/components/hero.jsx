import React, { Component } from 'react';
import Styled from 'styled-components';
import NavBar from './navbar';
import AboutMe from './aboutme';
import Shapes from './shapes';
import Backdrop from '../assets/paper-3164718.jpg';

const Hero = Styled.section`
  background: url(${Backdrop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 100%;
  height: 100%;
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
      <Hero className="hero is-fullheight" style={this.style}>
        <div className="hero-head">
          <NavBar />
        </div>
        <div className="hero-body">
          <Shapes />
          <div className="container" style={{ zIndex: '300' }}>
            <div className="columns is-centered is-gapless">
              <div className="column is-8">
                <AboutMe />
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

hero.propTypes = {};

export default hero;
