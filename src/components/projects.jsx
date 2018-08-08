import React from 'react';
import NewSquirrel from '../assets/newsquirrel-mockup.png';
import NutriVuewImg from '../assets/nutrivue-mockup.png';
import WeatherNow from '../assets/weathernow.png';
import BuiltWith from './builtwith';
import SectionHeader from './section-header';
import NutriVueLogo from '../assets/nutrivue.png';
import NewsquirrelLogo from '../assets/newsquirrel.png';
import WeathernowLogo from '../assets/weathernow_logo.jpg';
import TodeurImg from '../assets/todeur.png';
import {
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
} from '../styles/projects';

const data = [
  {
    name: 'Weather Now',
    image: WeatherNow,
    tech: ['react', 'typescript', 'redux', 'saga'],
    git: 'https://github.com/prabhuignoto/react-dark-weather',
    description:
      'A Beautiful Weather app that displays weather conditions in real time. Easily search for a location that you are interested in, and get the accurate forecast.',
    appUrl: '',
    logo: WeathernowLogo,
  },
  {
    name: 'Newsquirrel',
    image: NewSquirrel,
    tech: ['react', 'typescript', 'redux', 'saga'],
    git: 'https://github.com/prabhuignoto/react-news',
    description:
      'Read Top headlines and search millions of news articles from the web. Headlines can be filtered based on category and country.',
    appUrl: 'https://newsquirrel.netlify.com',
    logo: NewsquirrelLogo,
  },
  {
    name: 'Nutrivue',
    image: NutriVuewImg,
    tech: ['vue'],
    git: 'https://github.com/prabhuignoto/nutrivue',
    description:
      'Ever worried about the nutrients that make up your food. Nutrivue is here to help you dissect that for you',
    appUrl: 'https://nutrivue.netlify.com',
    logo: NutriVueLogo,
  },
  {
    name: 'Todeur',
    image: TodeurImg,
    tech: ['react', 'redux'],
    git: 'https://github.com/prabhuignoto/eatthatfrog',
    description:
      'Ever worried about the nutrients that make up your food. Nutrivue is here to help you dissect that for you',
    appUrl: 'https://nutrivue.netlify.com',
    logo: {},
  },
];

const Projects = () => (
  <Section className="section projects">
    <Wrapper className="container">
      <SectionHeader title="Projects" />
      <div className="columns is-centered is-multiline">
        {data.map(x => (
          <div className="column is-four-fifths-tablet is-half-desktop">
            <Project className="card">
              {/* <Header className="">
                  <Name>
                    {x.name}
                  </Name>
                </Header> */}
              <ImageWrapper className="card-image is-hidden-mobile">
                <Figure className="img">
                  <Img src={x.image} alt={x.name} className="image" />
                </Figure>
              </ImageWrapper>
              <div className="card-content">
                <CardContentWrapper>
                  <a href={x.appUrl} target="new">
                    <ApplogoWrapper>
                      <AppLogo src={x.logo} className="image" />
                    </ApplogoWrapper>
                  </a>
                  <AppDescription>
                    {x.description}
                  </AppDescription>
                </CardContentWrapper>
              </div>
              <Footer className="card-footer">
                <FooterWrapper className="is-centered is-multiline">
                  <BuiltWith tech={x.tech} showLabel={false} />
                  <GitLink
                    href={x.git}
                    target="new"
                    className="is-pulled-right"
                  >
                    <GitIcon />
                    <GitIconText>
                      {'View this Project on Github'}
                    </GitIconText>
                  </GitLink>
                </FooterWrapper>
              </Footer>
            </Project>
          </div>
        ))}
      </div>
    </Wrapper>
  </Section>
);

export default Projects;
