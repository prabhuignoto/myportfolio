import React from 'react';
import Styled from 'styled-components';
import { GatsbySVG, HeartSVG } from '../styles/images';
import Social from './social';


const Footer = Styled.footer`
  background: #e8f1f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1rem;
`;

const FooterWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Link = Styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-left: 0.25rem;
`;

const Text = Styled.div`
  display: block;
  white-space: nowrap;
  font-size: 0.9rem;
  font-family: 'Lato', sans-serif;
  margin-right: 0.25rem;
  font-weight: 700;
`;

const GatsbyWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const FooterView = () => (
  <Footer>
    <div className="container">
      <div className="columns is-centered is-multiline">
        <div className="column is-4-desktop">
          <Social />
        </div>
        <div className="column is-4-desktop">
          <FooterWrapper>
            <Text>
              {'Designed by me and Built with'}
            </Text>
            <img height="20" width="20" src={HeartSVG} alt="love" style={{ marginBottom: '0', margin: '0 0.25rem' }} />
          </FooterWrapper>
        </div>
        <div className="column is-4-desktop">
          <GatsbyWrapper>
            <Text>
              {'Powered By'}
            </Text>
            <Link href="www.gatsbyjs.org" target="new">
              <img height="20" width="20" src={GatsbySVG} alt="gatsby" style={{ marginBottom: '0', margin: '0 0.25rem' }} />
              <Text>
                {'Gatsby'}
              </Text>
            </Link>
          </GatsbyWrapper>
        </div>
      </div>
    </div>
  </Footer>
);

export default FooterView;
