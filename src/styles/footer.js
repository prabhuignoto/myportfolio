import Styled from 'styled-components';

export const Footer = Styled.footer`
  background: #e8f1f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1rem;
`;

export const FooterWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Link = Styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-left: 0.25rem;
`;

export const Text = Styled.div`
  display: block;
  white-space: nowrap;
  font-size: 0.9rem;
  font-family: 'Lato', sans-serif;
  margin-right: 0.25rem;
  font-weight: 700;
`;

export const GatsbyWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;