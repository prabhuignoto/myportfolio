import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/hero';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Skills from '../components/skills';
import { Footer } from '../styles/projects';

const IndexPage = (props) => {
  const {
    heroImage, profileImage, honeywellLogo, juniperLogo, techmLogo, jpmcLogo,
    weathernowLogo, weathernowMock, nutrivueLogo, nutrivueMock, newSquirrelLogo,
    newSquirrelMock
  } = props.data;
  return (<div>
    <Hero heroImage={heroImage} profileImage={profileImage}/>
    <Projects {...props}/>
    <Skills />
    <Experience  honeywellLogo={honeywellLogo} juniperLogo={juniperLogo} techmLogo={techmLogo} jpmcLogo={jpmcLogo}/>
    <Footer />
  </div>)
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.any,
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query HeroImageQuery {
    heroImage: imageSharp(id: { regex: "/hero/"} ) {
      sizes(maxWidth: 3000) {
        ...GatsbyImageSharpSizes
      }
    }
    profileImage: imageSharp(id: { regex: "/profile-pic/"}) {
      sizes(maxWidth: 337) {
        ...GatsbyImageSharpSizes
      }
    }
    honeywellLogo: imageSharp(id: { regex: "/honeywell/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    juniperLogo: imageSharp(id: { regex: "/juniper/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    techmLogo: imageSharp(id: { regex: "/techm/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    jpmcLogo: imageSharp(id: { regex: "/jpmc/"}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    newSquirrelLogo: imageSharp(id: { regex: "/newsquirrel-logo/"}) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    newSquirrelMock: imageSharp(id: { regex: "/newsquirrel-mockup/"}) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    nutrivueLogo: imageSharp(id: { regex: "/nutrivue-logo/"}) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    nutrivueMock: imageSharp(id: { regex: "/nutrivue-mockup/"}) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    weathernowLogo: imageSharp(id: { regex: "/weathernow-logo/"}) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    weathernowMock: imageSharp(id: { regex: "/weathernow-mock/"}) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    
  }
`;
