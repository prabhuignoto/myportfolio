import React from 'react';
import Img from 'gatsby-image';
import { any } from 'prop-types';
import SectionHeader from './section-header';
import {
  Wrapper, Company, Figure, Text,
} from '../styles/experience';
import Description from './description';

const ImgStyle = {
  filter: 'opacity(0.75) grayscale(99%)',
};

const Experience = ({
  juniperLogo, honeywellLogo, jpmcLogo, techmLogo,
}) => (
  <Wrapper className="section">
    <div className="container">
      <SectionHeader title="Experience" />
      <Description color="#006494" text="11+ years of product experience with Industries spanning telecom, fire controls, finance. Proud to be associated with some great names in the industry." />
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
              <Img sizes={techmLogo.sizes} alt="Tech Mahindra" imgStyle={ImgStyle} />
            </Figure>
          </Company>
        </div>
        <div className="column is-2 is-hidden-tablet is-flex-desktop" />
      </div>
    </div>
  </Wrapper>
);

Experience.propTypes = {
  juniperLogo: any,
  honeywellLogo: any,
  jpmcLogo: any,
  techmLogo: any,
};

export default Experience;
