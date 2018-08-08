import React from 'react';
import Hero from '../components/hero';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Skills from '../components/skills';
import { Footer } from '../styles/projects';

const IndexPage = props => (
  <div>
    <Hero heroImage={props.data.heroImage} />
    <Projects />
    <Skills />
    <Experience />
    <Footer />
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query HeroImageQuery {
    heroImage: imageSharp(id: { regex: "/hero/"} ) {
      sizes(maxWidth: 4000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
