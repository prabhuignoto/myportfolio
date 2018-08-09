import React, { Component } from 'react';
import About from '../styles/aboutme';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="box" style={{ position: 'relative' }}>
        <About>
          {'Hi there. This is Prabhu Murthy and this is my storyu'}
        </About>
      </div>
    );
  }
}

export default AboutMe;
