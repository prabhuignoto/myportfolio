import { GatsbyImage } from "gatsby-plugin-image";
import { arrayOf, number, shape, string } from "prop-types";
import React, { Component } from "react";
import {
  AppDescription,
  AppImageWrapper,
  ApplogoWrapper,
  CardContentWrapper,
  Footer,
  FooterWrapper,
  Project,
  Wrapper,
} from "../styles/projects";
import ImgType from "../types";
// import ScrollReveal from 'scrollreveal';
import BuiltWith from "./builtwith";
import Description from "./description";
import SectionHeader from "./section-header";

const gatsbyImgStyle = {
  maxHeight: "100%",
  maxWidth: "100%",
  width: "auto",
  height: "auto",
  top: "50%",
  transform: "translateY(-50%)",
  right: 0,
  left: 0,
  marginLeft: "auto",
  marginRight: "auto",
};

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="section projects" ref={this.ref}>
        <Wrapper className="container">
          <SectionHeader title="My Recent Work" color="#AD1A25" />
          <Description
            text="I create libraries that are both customizable and performant. Here are some of my most recent works."
            color="#37647C"
          />
          <div className="columns is-centered is-multiline">
            {data.map((x) => (
              <div
                className="column is-half-tablet is-one-third-desktop"
                key={x.id}
              >
                <Project className="">
                  <div
                    className="card-content is-paddingless"
                    style={{ padding: "0.5rem" }}
                  >
                    <CardContentWrapper>
                      {/* <a
                        href={x.appUrl}
                        target="new"
                        style={{ height: '5rem', width: '100%' }}
                      > */}
                      <ApplogoWrapper>
                        <AppImageWrapper>
                          <GatsbyImage
                            image={x.logo.childImageSharp.gatsbyImageData}
                            imgStyle={gatsbyImgStyle}
                            placeholderStyle={{ width: "100%" }} />
                        </AppImageWrapper>
                        <BuiltWith tech={x.tech} showLabel={false} />
                      </ApplogoWrapper>
                      {/* </a> */}
                      <AppDescription>{x.description}</AppDescription>
                    </CardContentWrapper>
                  </div>
                  {/* <ImageWrapper className="card-image">
                    <Figure className="img">
                      <Image
                        fluid={x.mock.childImageSharp.fluid}
                        alt={x.name}
                        imgStyle={gatsbyImgStyle}
                        placeholderStyle={{ width: '100%' }}
                      />
                    </Figure>
                  </ImageWrapper> */}
                  <Footer className="card-footer">
                    <FooterWrapper className="">
                      <span
                        style={{
                          position: "relative",
                          display: "block",
                          height: "40px",
                          width: "160px",
                        }}
                      >
                        <iframe
                          src={`https://ghbtns.com/github-btn.html?user=prabhuignoto&repo=${x.repo}&type=star&count=true&size=large`}
                          frameBorder="0"
                          scrolling="0"
                          width="150"
                          height="30"
                          title="GitHub"
                          style={{ marginLeft: "8px" }}
                        />
                      </span>
                      <a
                        href={x.appUrl}
                        target="new"
                        style={{ marginLeft: "auto", marginRight: "1rem" }}
                      >
                        View Project
                      </a>
                      {/* <GitLink
                        href={x.git}
                        target="_new"
                        className="is-pulled-right"
                        title="View this Project on Github"
                      >
                        <GitIcon />
                        <GitIconText>
                          Github
                          {/* {'View this Project on Github'}
                        </GitIconText>
                      </GitLink> */}
                    </FooterWrapper>
                  </Footer>
                </Project>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}

Projects.propTypes = {
  data: arrayOf(
    shape({
      id: number,
      name: string,
      mock: shape(ImgType),
      tech: arrayOf(string),
      git: string,
      description: string,
      appUrl: string,
      logo: shape(ImgType),
    })
  ).isRequired,
};
