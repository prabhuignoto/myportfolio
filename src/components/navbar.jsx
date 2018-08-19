import React, { Component } from 'react';
import Img from 'gatsby-image';
import { any } from 'prop-types';
import Styled from 'styled-components';
import Social from './social';
import Clock from './clock';

const LogoWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoStyle = {
  width: '6rem',
  height: '5rem',
};

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      background: 'rgba(255,255,255,0.9)',
      color: '#000',
    };
  }

  render() {
    const { prabhuLogo } = this.props;
    return (
      <nav className="navbar" style={this.style}>
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item" style={{ padding: 0 }}>
              <LogoWrapper>
                <Img sizes={prabhuLogo.sizes} alt="PM" style={LogoStyle} imgStyle={{ marginBottom: 0, maxHeight: '100%' }} />
              </LogoWrapper>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Clock />
            </div>
            <div className="navbar-end">
              <div className="navbar-item" style={{ padding: 0 }}>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

navbar.propTypes = {
  prabhuLogo: any,
};

export default navbar;
