import React from 'react';
import { GatsbySVG, HeartSVG, CopyrightSVG } from '../styles/images';
import Social from './social';
import {
  Footer, FooterWrapper, Text, GatsbyWrapper, Link, Copyright,
} from '../styles/footer';

const FooterView = () => (
  <Footer>
    <div className="container">
      <div className="columns is-centered is-multiline">
        <div className="column is-3-desktop">
          <Social />
        </div>
        <div className="column is-3-desktop">
          <FooterWrapper>
            <Text>
              {'Designed by me and built with'}
            </Text>
            <img height="18" width="18" src={HeartSVG} alt="love" style={{ marginBottom: '0', margin: '0 0.25rem' }} />
          </FooterWrapper>
        </div>
        <div className="column is-3-desktop">
          <GatsbyWrapper>
            <Text>
              {'Powered By'}
            </Text>
            <Link href="www.gatsbyjs.org" target="new">
              <img height="18" width="20" src={GatsbySVG} alt="gatsby" style={{ marginBottom: '0', margin: '0 0.25rem' }} />
              <Text>
                {'Gatsby'}
              </Text>
            </Link>
          </GatsbyWrapper>
        </div>
        <div className="column is-3-desktop">
          <Copyright>
            <Text>
              {'2018'}
            </Text>
            <img src={CopyrightSVG} alt="copyright" height="13" width="13" style={{ marginBottom: 0 }} />
            <Text>
              {'Prabhu Murthy'}
            </Text>
            <a href="http://pdfmyurl.com/saveaspdf?url=http://prabhumurthy.netlify.com">
              {'Download this page as PDF'}
            </a>
          </Copyright>
        </div>
      </div>
    </div>
  </Footer>
);

export default FooterView;
