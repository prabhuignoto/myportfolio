import React from 'react';
import Styled from 'styled-components';
import Honeywell from '../assets/honeywell.jpg';
import JPMC from '../assets/jpmc.png';
import Juniper from '../assets/juniper.jpg';
import TechM from '../assets/techm.jpg';
import SectionHeader from './section-header';

const Wrapper = Styled.div`
  display: flex;
  min-height: 35rem;
  justify: center;
  align-items: center;
`;

const Company = Styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  >:not(:last-child):after{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    background: #ddd;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
`;

const Figure = Styled.figure`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = Styled.img`
  filter: grayscale(100%) opacity(0.5);
  &:hover {
    filter: grayscale(0%);
  }
`;

const Text = Styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
  color: #247BA0;
`;

const Experience = () => (
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
              <Image src={Juniper} alt="Juniper Networks" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Image src={Honeywell} alt="Honeywell" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Image src={JPMC} alt="JP Morgan Chase" />
            </Figure>
          </Company>
        </div>
        <div className="column">
          <Company className="">
            <Figure className="image">
              <Image src={TechM} alt="Tech Mahindra" />
            </Figure>
          </Company>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Experience;
