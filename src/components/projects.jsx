import React, { Component } from 'react';
import Image from 'gatsby-image';
import {
  shape, string, arrayOf, any, number,
} from 'prop-types';
import BuiltWith from './builtwith';
import SectionHeader from './section-header';
import Description from './description';


import {
  Wrapper,
  AppDescription,
  CardContentWrapper,
  ApplogoWrapper,
  Footer,
  Figure,
  FooterWrapper,
  Project,
  ImageWrapper,
  GitIconText,
  GitIcon,
  GitLink,
  AppImageWrapper,
} from '../styles/projects';


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
  marginRight: 'auto',
};


export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    try {
      const sr = require('scrollreveal');
      sr().reveal(this.refs.projectsContainer, {
        delay: 200,
        duration: 1000,
        scale: 0.75,
        opacity: 0.5,
      });
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className="section projects" ref="projectsContainer">
        <Wrapper className="container">
          <SectionHeader title="My Recent Work" />
          <Description text="I design and develop Apps that are beautiful, responsive and highly performant." color="#006494" />
          <div className="columns is-centered is-multiline">
            {data.map(x => (
              <div className="column is-half-tablet is-one-third-desktop" key={x.id}>
                <Project className="card">
                  <div className="card-content is-paddingless" style={{ padding: '0.5rem' }}>
                    <CardContentWrapper>
                      <a href={x.appUrl} target="new" style={{ height: '5rem', width: '100%' }}>
                        <ApplogoWrapper>
                          <AppImageWrapper>
                            <Image
                              sizes={x.logo.sizes}
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
                        sizes={x.mock.sizes}
                        alt={x.name}
                        imgStyle={gatsbyImgStyle}
                      />
                    </Figure>
                  </ImageWrapper>
                  <Footer className="card-footer">
                    <FooterWrapper className="">
                      <BuiltWith tech={x.tech} showLabel={false} />
                      <GitLink
                        href={x.git}
                        target="new"
                        className="is-pulled-right"
                        title="View this Project on Github"
                      >
                        <GitIcon />
                        <GitIconText>
                          {/* {'View this Project on Github'} */}
                        </GitIconText>
                      </GitLink>
                    </FooterWrapper>
                  </Footer>
                </Project>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}


Projects.propTypes = {
  data: arrayOf(shape({
    id: number,
    name: string,
    mock: any,
    tech: arrayOf(string),
    git: string,
    description: string,
    appUrl: string,
    logo: any,
  })).isRequired,
};
