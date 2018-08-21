import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Hero from '../components/hero';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Tools from '../components/tools';
import Footer from '../components/footer';
import ProjectsData from '../data/projects';
import Skills from '../components/techskills';
import Layout from '../components/layout';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const {
      data: {
        heroImage, profileImage, honeywellLogo, juniperLogo,
        techmLogo, jpmcLogo, toolImage, prabhuLogo, designPicture,
      },
    } = this.props;
    const projectsData = ProjectsData.map(x => Object.assign({}, x, {
      mock: this.props.data[x.mock],
      logo: this.props.data[x.logo],
    }));
    return (
      <Layout>
        <Hero heroImage={heroImage} profileImage={profileImage} prabhuLogo={prabhuLogo} />
        <Projects data={projectsData} />
        <Skills designPicture={designPicture} />
        <Tools toolImage={toolImage} />
        <Experience
          honeywellLogo={honeywellLogo}
          juniperLogo={juniperLogo}
          techmLogo={techmLogo}
          jpmcLogo={jpmcLogo}
        />
        <Footer />
      </Layout>
    );
  }
}


Index.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.any,
  }).isRequired,
};

export const pageQuery = graphql`
  query HeroImageQuery {
    heroImage: imageSharp(fluid:{ originalName:{ regex: "/red/"}} ) {
      sizes(maxWidth: 4000) {
        ...GatsbyImageSharpSizes
      }
    }
    prabhuLogo: imageSharp(fluid:{ originalName: { regex: "/prabhu/"} }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    designPicture: imageSharp(fluid: { originalName: { regex: "/design/"}}) {
      sizes(maxWidth: 1350) {
        ...GatsbyImageSharpSizes
      }
    }
    toolImage: imageSharp(fluid: {originalName: { regex: "/andyone/"}}) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    profileImage: imageSharp(fluid: {originalName: { regex: "/profile-pic/"}}) {
      sizes(maxWidth: 337) {
        ...GatsbyImageSharpSizes
      }
    }
    honeywellLogo: imageSharp(fluid: {originalName: { regex: "/honeywell/"}}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    juniperLogo: imageSharp(fluid: { originalName: { regex: "/juniper/"}}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    techmLogo: imageSharp(fluid: {originalName: { regex: "/techm/"}}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    jpmcLogo: imageSharp(fluid: {originalName: { regex: "/jpmc/"}}) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    newSquirrelLogo: imageSharp(fluid: {originalName: { regex: "/newsquirrel-logo/"}}) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    newSquirrelMock: imageSharp(fluid: {originalName: { regex: "/newsquirrel-mockup/"}}) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    nutrivueLogo: imageSharp(fluid: {originalName: { regex: "/nutrivue-logo/"}}) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    nutrivueMock: imageSharp(fluid: {originalName: { regex: "/nutrivue-mockup/"}}) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    weathernowLogo: imageSharp(fluid: {originalName: { regex: "/weathernow-logo/"}}) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    weathernowMock: imageSharp(fluid: {originalName: { regex: "/weathernow-mock/"}}) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    
  }
`;
