import React, { Component } from 'react';
import About from '../styles/aboutme';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="box" style={{ position: 'relative', backgroundColor: 'transparent' }}>
        <About className="content">
          <p>
            {'Hey I\'m Prabhu Murthy'}
          </p>
          <p>
            {'I\'m a fullstack javascript developer, designer and very passionate about developing apps that scale well.'}
          </p>
        </About>
      </div>
    );
  }
}

export default AboutMe;
