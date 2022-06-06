import { GatsbyImage } from "gatsby-plugin-image";
import { shape } from "prop-types";
import React from "react";
import { Company, Figure, Wrapper } from "../styles/experience";
import ImgType from "../types";
import Description from "./description";
import SectionHeader from "./section-header";

const ImgStyle = {
  filter: "opacity(0.75) grayscale(99%)",
};

const Experience = ({ juniperLogo, honeywellLogo, jpmcLogo, cumulusLogo }) => (
  <Wrapper className="section">
    <div className="container">
      <SectionHeader title="Experience" color="#AD1A25" />
      <Description
        color="#746764"
        text="12+ years of product experience with Industries spanning telecom, fire controls, finance. Proud to be associated with some great names in the industry."
      />
      <div
        className="columns is-centered is-multiline"
        style={{ marginTop: "2rem" }}
      >
        <div className="column is-2 is-hidden-tablet is-flex-desktop" />
        <div className="column">
          <Company className="">
            <Figure className="image">
              <GatsbyImage
                image={juniperLogo.childImageSharp.gatsbyImageData}
                alt="Juniper Networks"
                imgStyle={ImgStyle} />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <GatsbyImage
                image={honeywellLogo.childImageSharp.gatsbyImageData}
                alt="Honeywell"
                imgStyle={ImgStyle} />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <GatsbyImage
                image={jpmcLogo.childImageSharp.gatsbyImageData}
                alt="JP Morgan Chase"
                imgStyle={ImgStyle} />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <GatsbyImage
                image={cumulusLogo.childImageSharp.gatsbyImageData}
                alt="Cumulus Networks"
                imgStyle={ImgStyle} />
            </Figure>
          </Company>
        </div>
        <div className="column is-2 is-hidden-tablet is-flex-desktop" />
      </div>
    </div>
  </Wrapper>
);

Experience.propTypes = {
  juniperLogo: shape(ImgType).isRequired,
  honeywellLogo: shape(ImgType).isRequired,
  jpmcLogo: shape(ImgType).isRequired,
  cumulusLogo: shape(ImgType).isRequired,
};

export default Experience;
