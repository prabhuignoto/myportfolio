import Styled from '@emotion/styled';
import GitSVG from '../assets/github.svg';

export const Section = Styled('div')`
  position: relative;
  padding: 0;
`;

export const Wrapper = Styled('div')`
  /* padding: 3rem 3rem; */
  font-family: 'Open Sans', sans-serif;
  z-index:1;
`;

export const Project = Styled('div')`
  position: relative;
  margin-bottom: 2.5rem;
  /* box-shadow: 0px 0 10px 2px rgba(0,0,0,0.15); */
  border-radius: 5px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background: red;
  }
`;

export const GitLink = Styled('a')`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  margin-left: auto;
`;

export const GitIcon = Styled('i')`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background: url(${GitSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  margin-bottom: 0.25rem;
`;

export const GitIconText = Styled('span')`
  font-size: 0.85rem;
  margin-left: 0.5rem;
`;

export const ImageWrapper = Styled('div')`
  width: 100%;
`;

export const Img = Styled('div')`
  width: 100%;
  height: 100%;
  background: url(${p => p.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
`;

export const Figure = Styled('figure')`
  width: auto;
  height: 25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 15rem;
  }
`;

export const Footer = Styled('footer')`
  width: 100%;
  padding: 1rem 0.25rem;
  border-top: none;
`;

export const FooterWrapper = Styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ApplogoWrapper = Styled('figure')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  /* margin-top: 1rem; */
  width: 100%;
`;

export const AppLogo = Styled('img')`
  border-radius: 4px;
`;

export const AppImageWrapper = Styled('div')`
  display: block;
  height: 4rem;
  width: 8rem;
  margin-left: 1rem;
`;

export const AppDescription = Styled('p')`
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
  padding: 1rem;
  min-height: 2rem;
  margin-top: 1rem;
`;

export const CardContentWrapper = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;