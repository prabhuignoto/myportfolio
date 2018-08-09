import React from 'react';
import BuiltWith from './builtwith';
import SectionHeader from './section-header';
import Description from "./description";

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
  AppImageWrapper
} from '../styles/projects';
import Image from 'gatsby-image';


const gatsbyImgStyle = {
  maxHeight: '100%',
  maxWidth: '100%',
  width: 'auto',
  height: 'auto',
  top: '50%',
  transform: 'translateY(-50%)',
  right: 0,
  left: 0,
  marginLeft: 'auto',
  marginRight: 'auto'
};

const data = [
  {
    name: 'Weather Now',
    mock: 'weathernowMock',
    tech: ['react', 'typescript', 'redux', 'saga'],
    git: 'https://github.com/prabhuignoto/react-dark-weather',
    description:
      'A Beautiful Weather app that displays weather conditions in real time.',
    appUrl: '',
    logo: 'weathernowLogo',
  },
  {
    name: 'Newsquirrel',
    mock: 'newSquirrelMock',
    tech: ['react', 'typescript', 'redux', 'saga'],
    git: 'https://github.com/prabhuignoto/react-news',
    description:
      'Read Top headlines and search millions of news articles from the web. Headlines can be filtered based on category and country.',
    appUrl: 'https://newsquirrel.netlify.com',
    logo: 'newSquirrelLogo',
  },
  {
    name: 'Nutrivue',
    mock: 'nutrivueMock',
    tech: ['vue'],
    git: 'https://github.com/prabhuignoto/nutrivue',
    description:
      'Ever worried about the nutrients that make up your food. Nutrivue is here to help you dissect that for you',
    appUrl: 'https://nutrivue.netlify.com',
    logo: 'nutrivueLogo',
  },
  {
    name: 'Todeur',
    mock: 'newSquirrelMock',
    tech: ['react', 'redux'],
    git: 'https://github.com/prabhuignoto/eatthatfrog',
    description:
      'Ever worried about the nutrients that make up your food. Nutrivue is here to help you dissect that for you',
    appUrl: 'https://nutrivue.netlify.com',
    logo: 'newSquirrelLogo',
  },
];

const Projects = (props) => (
  <Section className="section projects">
    <Wrapper className="container">
      <SectionHeader title="Projects" />
      <Description text="I Design and develop Apps that are beautiful, responsive and highly performant. These are some of my recent works." color="#000" />
      <div className="columns is-centered is-multiline">
        {data.map(x => (
          <div className="column is-four-fifths-tablet is-half-desktop">
            <Project className="card">
              {/* <Header className="">
                  <Name>
                    {x.name}
                  </Name>
                </Header> */}
              <div className="card-content is-paddingless" style={{ padding: '0.5rem'}}>
                <CardContentWrapper>
                  <a href={x.appUrl} target="new" style={{ height: '5rem', width: '100%' }}>
                    <ApplogoWrapper>
                      <AppImageWrapper>
                        <Image
                          sizes={props.data[x.logo].sizes}
                          imgStyle={gatsbyImgStyle}
                        />
                      </AppImageWrapper>
                    </ApplogoWrapper>
                  </a>
                  <AppDescription>
                    {x.description}
                  </AppDescription>
                </CardContentWrapper>
              </div>
              <ImageWrapper className="card-image">
                <Figure className="img">
                  <Image
                    sizes={props.data[x.mock].sizes}
                    alt={x.name}
                    imgStyle={gatsbyImgStyle}
                  />
                </Figure>
              </ImageWrapper>
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
