import React, { Component } from 'react';
import { Mark, About } from '../styles/aboutme';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="box" style={{ position: 'relative', backgroundColor: 'transparent', boxShadow: 'none' }}>
        <About className="content">
          <p>
            {'Hey I\'m Prabhu Murthy'}
          </p>
          <p>
            {'I\'m a'}
            <Mark>
              {'fullstack'}
            </Mark>
            {'javascript developer, designer and very passionate about developing apps that scale very well.'}
          </p>
          <p>
            {'My Core expertise is building frontend apps through '}
            <Mark>
              {'React/Vue'}
            </Mark>
            {'and build app servers using Node'}
            <Mark>
              {'(Express/Sails).'}
            </Mark>
          </p>
          <p>
            {'I have extensive experience in designing and building web apps that are '}
            <Mark>
              {'highly secure & fast performing.'}
            </Mark>
          </p>
        </About>
      </div>
    );
  }
}

export default AboutMe;
