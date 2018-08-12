import React, { Component } from 'react';
import Styled from 'styled-components';
import { object } from 'prop-types';
import SectionHeader from './section-header';
import Skillbox from '../styles/skills';
import * as Data from '../data/skillsData';
import Description from './description';

const Content = Styled.div`
  position: relative;
  box-shadow: 0 0 13px 5px rgba(0,0,0,0.2);
  &::before {
    content: '${p => p.heading}';
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    color: rgba(0, 0, 0, 0.7);
    height: auto;
    width: auto;
    font-size: 0.75rem;
    font-weight: 500;
    background: #fff;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    background: #E8F1F2;
    color: #000;
  }
`;


const Container = Styled.section`
  min-height: 80vh;
`;


export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    try {
      const sr = require('scrollreveal');
      sr().reveal(this.refs.skillsContainer, {
        delay: 200,
        duration: 1000,
        scale: 0.85,
        opacity: 0.5,
      });
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    return (
      <Container className="section" style={{ position: 'relative', backgroundColor: '#006494' }}>
        <div className="container" ref="skillsContainer">
          <SectionHeader title="Tools &amp; Frameworks that I'm good at" color="#fff" />
          <Description text="" />
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="UI Libs">
                    <Skillbox title="" items={Data.uiFworkBoxes} />
                  </Content>
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="UI Libs">
                    <Skillbox title="" items={Data.reactTools} />
                  </Content>
                </div>
                <div className="tile is-parent is-vertical">
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="Server">
                    <Skillbox title="" items={Data.Node} />
                  </Content>
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="React F/W">
                    <Skillbox title="" items={Data.reactFW} />
                  </Content>
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="Testing F/W">
                    <Skillbox title="" items={Data.test} />
                  </Content>
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="Type System">
                    <Skillbox title="" items={Data.types} />
                  </Content>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="HTML &amp; Styling">
                <Skillbox title="" items={Data.www} />
              </Content>
              <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="Tool Chain">
                <Skillbox title="" items={Data.ToolChain} />
              </Content>
              <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="Editors">
                <Skillbox title="" items={Data.Editors} />
              </Content>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}


Skills.propTypes = {
  toolImage: object.isRequired,
};
