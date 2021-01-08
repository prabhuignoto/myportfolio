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
    heroImage: file(relativePath: { eq: "cave.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prabhuLogo: file(relativePath: { eq: "prabhu.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    designPicture: file(relativePath: { eq: "design.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # toolImage: file(relativePath: { eq: "andyone" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 2000) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    profileImage: file(relativePath: { eq: "profile-pic.png" }) {
      childImageSharp {
        fluid(maxWidth: 337) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    honeywellLogo: file(relativePath: { eq: "honeywell.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    juniperLogo: file(relativePath: { eq: "juniper.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    techmLogo: file(relativePath: { eq: "techm.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jpmcLogo: file(relativePath: { eq: "jpmc.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cumulusLogo: file(relativePath: { eq: "cumulus.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newSquirrelLogo: file(relativePath: { eq: "newsquirrel-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newSquirrelMock: file(relativePath: { eq: "newsquirrel-mockup.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nutrivueLogo: file(relativePath: { eq: "nutrivue-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nutrivueMock: file(relativePath: { eq: "nutrivue-mockup.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chronoLogo: file(relativePath: { eq: "chrono-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chronoMock: file(relativePath: { eq: "chrono-mock.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boxyLogo: file(relativePath: { eq: "boxy-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boxyMock: file(relativePath: { eq: "boxy-mock.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smartTagzLogo: file(relativePath: { eq: "smart-tagz-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smartTagzMock: file(relativePath: { eq: "smart-tagz-mock.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floatMock: file(relativePath: { eq: "float-mock.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floatLogo: file(relativePath: { eq: "float-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    worldtimeLogo: file(relativePath: { eq: "worldtime-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    worldtimeMock: file(relativePath: { eq: "worldtime-mock.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flixyLogo: file(relativePath: { eq: "flixy-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flixyMock: file(relativePath: { eq: "flixy-mock.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vSlideMock: file(relativePath: { eq: "v-slide-mock.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vSlideLogo: file(relativePath: { eq: "v-slide-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vDockMock: file(relativePath: { eq: "vue-dock-mock.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vueDockLogo: file(relativePath: { eq: "vue-dock-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
