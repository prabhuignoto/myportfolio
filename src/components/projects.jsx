import Image from 'gatsby-image';
import {
  arrayOf, number, shape, string,
} from 'prop-types';
import React, { Component } from 'react';
import {
  AppDescription,
  AppImageWrapper,
  ApplogoWrapper,
  CardContentWrapper,
  Figure,
  Footer,
  FooterWrapper,
  GitIcon,
  GitIconText,
  GitLink,
  ImageWrapper,
  Project,
  Wrapper,
} from '../styles/projects';
import ImgType from '../types';
// import ScrollReveal from 'scrollreveal';
import BuiltWith from './builtwith';
import Description from './description';
import SectionHeader from './section-header';

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
    this.ref = React.createRef();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="section projects" ref={this.ref}>
        <Wrapper className="container">
          <SectionHeader title="My Recent Work" color="#AD1A25" />
          <Description
            text="I design and develop apps that are beautiful, responsive and highly performant. Here are my recent works"
            color="#37647C"
          />
          <div className="columns is-centered is-multiline">
            {data.map((x) => (
              <div
                className="column is-half-tablet is-one-third-desktop"
                key={x.id}
              >
                <Project className="">
                  <div
                    className="card-content is-paddingless"
                    style={{ padding: '0.5rem' }}
                  >
                    <CardContentWrapper>
                      {/* <a
                        href={x.appUrl}
                        target="new"
                        style={{ height: '5rem', width: '100%' }}
                      > */}
                      <ApplogoWrapper>
                        <AppImageWrapper>
                          <Image
                            sizes={x.logo.sizes}
                            imgStyle={gatsbyImgStyle}
                            placeholderStyle={{ width: '100%' }}
                          />
                        </AppImageWrapper>
                        <BuiltWith tech={x.tech} showLabel={false} />
                      </ApplogoWrapper>
                      {/* </a> */}
                      <AppDescription>{x.description}</AppDescription>
                    </CardContentWrapper>
                  </div>
                  {/* <ImageWrapper className="card-image">
                    <Figure className="img">
                      <Image
                        sizes={x.mock.sizes}
                        alt={x.name}
                        imgStyle={gatsbyImgStyle}
                        placeholderStyle={{ width: '100%' }}
                      />
                    </Figure>
                  </ImageWrapper> */}
                  <Footer className="card-footer">
                    <FooterWrapper className="">
                      <a
                        href={x.appUrl}
                        target="new"
                        style={{ marginLeft: '1rem', marginRight: 'auto' }}
                      >
                        View demo
                      </a>
                      <GitLink
                        href={x.git}
                        target="_new"
                        className="is-pulled-right"
                        title="View this Project on Github"
                      >
                        <GitIcon />
                        <GitIconText>
                          Github
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
  data: arrayOf(
    shape({
      id: number,
      name: string,
      mock: shape(ImgType),
      tech: arrayOf(string),
      git: string,
      description: string,
      appUrl: string,
      logo: shape(ImgType),
    }),
  ).isRequired,
};
