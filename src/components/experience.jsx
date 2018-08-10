import React from 'react';
import Img from 'gatsby-image';
import SectionHeader from './section-header';
import {
  Wrapper, Company, Figure, Text,
} from '../styles/experience';


const Experience = ({
  juniperLogo, honeywellLogo, jpmcLogo, techmLogo,
}) => (
  <Wrapper className="section">
    <div className="container">
      <SectionHeader title="Experience" />
      <div className="content">
        <Text>
          {'11+ years of product experience with Industries spanning telecom, fire controls, finance. Proud to be associated with some great names in the industry.'}
        </Text>
      </div>
      <div className="columns is-centered is-multiline" style={{ marginTop: '2rem' }}>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={juniperLogo.sizes} alt="Juniper Networks" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={honeywellLogo.sizes} alt="Honeywell" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={jpmcLogo.sizes} alt="JP Morgan Chase" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={techmLogo.sizes} alt="Tech Mahindra" />
            </Figure>
          </Company>
        </div>
      </div>
    </div>
  </Wrapper>
);

Experience.propTypes = {
  juniperLogo: object,
  honeywellLogo: object,
  jpmcLogo: object,
  techmLogo: object,
};

export default Experience;
