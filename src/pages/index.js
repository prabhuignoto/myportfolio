import React from 'react';
import Hero from '../components/hero';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Skills from '../components/skills';
import { Footer } from '../styles/projects';

const IndexPage = () => (
  <div>
    <Hero />
    <Projects />
    <Skills />
    <Experience />
    <Footer />
  </div>
);

export default IndexPage;
