import React from 'react';
import SectionHeader from './section-header';
import Img from "gatsby-image";
import { Wrapper, Company, Figure, Image, Text} from "../styles/experience";


const Experience = (props) => (
  <Wrapper className="section">
    <div className="container">
      <SectionHeader title="Experience" />
      <div className="content">
        <Text>
          {'11+ years of product experience with Industries spanning telecom, fire controls, finance. Proud to be associated with some great names in the industry.'}
        </Text>
      </div>
      <div className="columns is-centered is-multiline" style={{marginTop: '2rem'}}>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={props.juniperLogo.sizes} alt="Juniper Networks" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={props.honeywellLogo.sizes} alt="Honeywell" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={props.jpmcLogo.sizes} alt="JP Morgan Chase" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Img sizes={props.techmLogo.sizes} alt="Tech Mahindra" />
            </Figure>
          </Company>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Experience;
