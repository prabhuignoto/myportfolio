import React from 'react';
import Styled from 'styled-components';

const Footer = Styled.footer`
  background: #e8f1f2;
`;

const FooterWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterView = () => (
  <Footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column">
          <FooterWrapper>
            Powered by Bulma & Gatsby
          </FooterWrapper>
        </div>
      </div>
    </div>
  </Footer>
);

export default FooterView;
