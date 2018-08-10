import React from 'react';
import { GatsbySVG, HeartSVG } from '../styles/images';
import Social from './social';
import {
  Footer, FooterWrapper, Text, GatsbyWrapper, Link,
} from '../styles/footer';

const FooterView = () => (
  <Footer>
    <div className="container">
      <div className="columns is-centered is-multiline">
        <div className="column is-4-desktop is-">
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
