import React from 'react';
import { Mark, About } from '../styles/aboutme';


export default function AboutMe() {
  return (
    <div className="box" style={{ position: 'relative', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <About className="content">
        <p>
          {'Hey I\'m Prabhu Murthy'}
        </p>
        <p>
          {'I\'m a'}
          <Mark>
            {' Fullstack'}
          </Mark>
          {' javascript developer, designer and web applications architect and deeply passionate about developing apps that scale well.'}
        </p>
        <p>
          My core expertise is building frontend apps using industry standard f/w & libs such as
          <Mark>
            React, Vue and Angular.
          </Mark>
          {' I also design & build application servers using '}
          <Mark>
            Node JS, Graph QL, Apollo Server & Sails JS
          </Mark>
        </p>
        <p>
          {'I have extensive experience in designing and building high quality web apps that are '}
          <Mark>
            highly secure and fast performing.
          </Mark>
        </p>
        <div>
          <a
            href="mailto:prabhu.m.murthy@gmail.com"
            style={{ marginRight: '0.5rem', fontSize: '1.25rem' }}
          >
            Contact me
          </a>
          <a
            href="https://app.enhancv.com/share/eaa533b7?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            style={{ marginRight: '0.25rem', fontSize: '1.25rem' }}
            target="_new"
          >
            View Resume
          </a>
        </div>
      </About>
    </div>

  );
}
