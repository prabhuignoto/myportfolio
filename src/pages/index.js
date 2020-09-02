import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Projects from '../components/projects';
import Skills from '../components/techskills';
import Tools from '../components/tools';
import ProjectsData from '../data/projects';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line global-require
    // const fontloader = require('webfontloader');
    // fontloader.load({
    //   google: {
    //     families: ['Open Sans:n4,n5,n6'],
    //   },
    //   active: () => {
    //     this.setState({
    //       fontsLoaded: true,
    //     });
    //   },
    // });
    this.setState({
      fontsLoaded: true,
    });
  }

  render() {
    const {
      data: {
        heroImage,
        profileImage,
        honeywellLogo,
        juniperLogo,
        techmLogo,
        jpmcLogo,
        toolImage,
        prabhuLogo,
        designPicture,
        cumulusLogo,
      },
    } = this.props;
    const projectsData = ProjectsData.map((x) => ({
      ...x,
      mock: this.props.data[x.mock],
      logo: this.props.data[x.logo],
    }));
    const { fontsLoaded } = this.state;
    return (
      <>
        {fontsLoaded ? (
          <Layout>
            <Hero
              heroImage={heroImage}
              profileImage={profileImage}
              prabhuLogo={prabhuLogo}
            />
            <Projects data={projectsData} />
            <Skills designPicture={designPicture} />
            <Tools toolImage={toolImage} />
            <Experience
              honeywellLogo={honeywellLogo}
              juniperLogo={juniperLogo}
              techmLogo={techmLogo}
              jpmcLogo={jpmcLogo}
              cumulusLogo={cumulusLogo}
            />
            <Footer />
          </Layout>
        ) : null}
      </>
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
    heroImage: imageSharp(fluid: { originalName: { regex: "/marjanblan/" } }) {
      sizes(maxWidth: 4000) {
        ...GatsbyImageSharpSizes
      }
    }
    prabhuLogo: imageSharp(fluid: { originalName: { regex: "/prabhu/" } }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    designPicture: imageSharp(fluid: { originalName: { regex: "/design/" } }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
    toolImage: imageSharp(fluid: { originalName: { regex: "/andyone/" } }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    profileImage: imageSharp(
      fluid: { originalName: { regex: "/profile-pic/" } }
    ) {
      sizes(maxWidth: 337) {
        ...GatsbyImageSharpSizes
      }
    }
    honeywellLogo: imageSharp(
      fluid: { originalName: { regex: "/honeywell/" } }
    ) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    juniperLogo: imageSharp(fluid: { originalName: { regex: "/juniper/" } }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    techmLogo: imageSharp(fluid: { originalName: { regex: "/techm/" } }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    jpmcLogo: imageSharp(fluid: { originalName: { regex: "/jpmc/" } }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    cumulusLogo: imageSharp(fluid: { originalName: { regex: "/cumulus/" } }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    newSquirrelLogo: imageSharp(
      fluid: { originalName: { regex: "/newsquirrel-logo/" } }
    ) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    newSquirrelMock: imageSharp(
      fluid: { originalName: { regex: "/newsquirrel-mockup/" } }
    ) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    nutrivueLogo: imageSharp(
      fluid: { originalName: { regex: "/nutrivue-logo/" } }
    ) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    nutrivueMock: imageSharp(
      fluid: { originalName: { regex: "/nutrivue-mockup/" } }
    ) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    chronoLogo: imageSharp(
      fluid: { originalName: { regex: "/chrono-logo/" } }
    ) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    chronoMock: imageSharp(
      fluid: { originalName: { regex: "/chrono-mock/" } }
    ) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    boxyLogo: imageSharp(fluid: { originalName: { regex: "/boxy-logo/" } }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    boxyMock: imageSharp(fluid: { originalName: { regex: "/boxy-mock/" } }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    smartTagzLogo: imageSharp(fluid: { originalName: { regex: "/smart-tagz-logo/" } }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    smartTagzMock: imageSharp(fluid: { originalName: { regex: "/smart-tagz-mock/" } }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    worldtimeLogo: imageSharp(
      fluid: { originalName: { regex: "/worldtime-logo/" } }
    ) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    worldtimeMock: imageSharp(
      fluid: { originalName: { regex: "/worldtime-mock/" } }
    ) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    flixyLogo: imageSharp(fluid: { originalName: { regex: "/flixy-logo/" } }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    flixyMock: imageSharp(fluid: { originalName: { regex: "/flixy-mock/" } }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    vSlideMock: imageSharp(
      fluid: { originalName: { regex: "/v-slide-mock/" } }
    ) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    vSlideLogo: imageSharp(
      fluid: { originalName: { regex: "/v-slide-logo/" } }
    ) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
