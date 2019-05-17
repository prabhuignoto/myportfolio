import React from 'react';
import Img from 'gatsby-image';
import { shape } from 'prop-types';
import SectionHeader from './section-header';
import {
  Wrapper, Company, Figure,
} from '../styles/experience';
import Description from './description';
import ImgType from '../types';

const ImgStyle = {
  filter: 'opacity(0.75) grayscale(99%)',
};

const Experience = ({
  juniperLogo, honeywellLogo, jpmcLogo, cumulusLogo,
}) => (
  <Wrapper className="section">
    <div className="container">
      <SectionHeader title="Experience" />
      <Description color="#746764" text="11+ years of product experience with Industries spanning telecom, fire controls, finance. Proud to be associated with some great names in the industry." />
      <div className="columns is-centered is-multiline" style={{ marginTop: '2rem' }}>
        <div className="column is-2 is-hidden-tablet is-flex-desktop" />
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={juniperLogo.sizes} alt="Juniper Networks" imgStyle={ImgStyle} />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={honeywellLogo.sizes} alt="Honeywell" imgStyle={ImgStyle} />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={jpmcLogo.sizes} alt="JP Morgan Chase" imgStyle={ImgStyle} />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={cumulusLogo.sizes} alt="Cumulus Networks" imgStyle={ImgStyle} />
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
