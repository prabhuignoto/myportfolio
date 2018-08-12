import Styled from 'styled-components';
import GitSVG from '../assets/github.svg';

const Section = Styled.div`
  position: relative;
`;

const Wrapper = Styled.div`
  min-height: 80vh;
  padding: 3rem 3rem;
  font-family: 'Lato', sans-serif;
  z-index:1;
`;

const Project = Styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  box-shadow: 0px 0 10px 2px rgba(0,0,0,0.15);
  border-radius: 5px;
  /* background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(232,241,242,1) 100%); */
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

const GitLink = Styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  /* margin-left: auto; */
`;

const GitIcon = Styled.i`
  display: block;
  width: 25px;
  height: 25px;
  background: url(${GitSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  margin-bottom: 0.25rem;
`;

const GitIconText = Styled.span`
  font-size: 0.85rem;
  margin-left: 0.5rem;
`;

const ImageWrapper = Styled.div`
  width: 100%;
`;

const Img = Styled.div`
  width: 100%;
  height: 100%;
  background: url(${p => p.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
`;

const Figure = Styled.figure`
  /* width: 25rem; */
  width: auto;
  height: 23rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = Styled.footer`
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-top: none;
`;

const FooterWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ApplogoWrapper = Styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const AppLogo = Styled.img`
  border-radius: 4px;
`;

const AppImageWrapper = Styled.div`
  display: block;
  height: 3rem;
  width: 14rem;
`;

const AppDescription = Styled.p`
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  padding: 1rem;
  min-height: 2rem;
  margin-top: 1rem;
`;

const CardContentWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export {
  Wrapper,
  Section,
  AppLogo,
  AppDescription,
  CardContentWrapper,
  ApplogoWrapper,
  Footer,
  Figure,
  Img,
  FooterWrapper,
  Project,
  ImageWrapper,
  GitIconText,
  GitIcon,
  GitLink,
  AppImageWrapper,
};
