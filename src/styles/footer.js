import Styled from '@emotion/styled';

export const Footer = Styled('footer')`
  background: #d8d8d7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1rem;
`;

export const FooterWrapper = Styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Link = Styled('a')`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem;
  margin-left: 0.25rem;
`;

export const Text = Styled('div')`
  display: block;
  white-space: nowrap;
  font-size: 1rem;
  /* font-family: 'Open Sans', sans-serif; */
  margin: 0 0.25rem;
`;

export const GatsbyWrapper = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  /* margin-left: 2rem; */
`;

export const Copyright = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 auto;
  height: 100%;
  font-size: 0.5rem;
`;
