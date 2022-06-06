import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Skills from "../components/techskills";
import Tools from "../components/tools";
import ProjectsData from "../data/projects";

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
    return fontsLoaded ? (
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
    ) : null;
  }
}

Index.propTypes = {
  data: PropTypes.shape({
    heroImage: PropTypes.any,
  }).isRequired,
};

export const pageQuery = graphql`query HeroImageQuery {
  heroImage: file(relativePath: {eq: "christian-holzinger.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, quality: 100)
    }
  }
  prabhuLogo: file(relativePath: {eq: "prabhu.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  designPicture: file(relativePath: {eq: "design.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  profileImage: file(relativePath: {eq: "profile-pic.png"}) {
    childImageSharp {
      gatsbyImageData(width: 337, layout: CONSTRAINED)
    }
  }
  honeywellLogo: file(relativePath: {eq: "honeywell.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 800, layout: CONSTRAINED)
    }
  }
  juniperLogo: file(relativePath: {eq: "juniper.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 800, layout: CONSTRAINED)
    }
  }
  techmLogo: file(relativePath: {eq: "techm.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 800, layout: CONSTRAINED)
    }
  }
  jpmcLogo: file(relativePath: {eq: "jpmc.png"}) {
    childImageSharp {
      gatsbyImageData(width: 800, layout: CONSTRAINED)
    }
  }
  cumulusLogo: file(relativePath: {eq: "cumulus.png"}) {
    childImageSharp {
      gatsbyImageData(width: 800, layout: CONSTRAINED)
    }
  }
  newSquirrelLogo: file(relativePath: {eq: "newsquirrel-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  newSquirrelMock: file(relativePath: {eq: "newsquirrel-mockup.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  nutrivueLogo: file(relativePath: {eq: "nutrivue-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  nutrivueMock: file(relativePath: {eq: "nutrivue-mockup.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  chronoLogo: file(relativePath: {eq: "chrono-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  chronoMock: file(relativePath: {eq: "chrono-mock.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  boxyLogo: file(relativePath: {eq: "boxy-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  boxyMock: file(relativePath: {eq: "boxy-mock.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  smartTagzLogo: file(relativePath: {eq: "smart-tagz-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  smartTagzMock: file(relativePath: {eq: "smart-tagz-mock.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  floatMock: file(relativePath: {eq: "float-mock.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  floatLogo: file(relativePath: {eq: "float-logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  worldtimeLogo: file(relativePath: {eq: "worldtime-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  worldtimeMock: file(relativePath: {eq: "worldtime-mock.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  flixyLogo: file(relativePath: {eq: "flixy-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  flixyMock: file(relativePath: {eq: "flixy-mock.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  vSlideMock: file(relativePath: {eq: "v-slide-mock.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  vSlideLogo: file(relativePath: {eq: "v-slide-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  vDockMock: file(relativePath: {eq: "vue-dock-mock.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  vueDockLogo: file(relativePath: {eq: "vue-dock-logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  cremeLogo: file(relativePath: {eq: "react-creme-logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
  wizardryLogo: file(relativePath: {eq: "react-wizardry-logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 900, layout: CONSTRAINED)
    }
  }
}
`;
