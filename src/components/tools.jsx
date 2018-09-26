import React, { Component } from 'react';
// import ScrollReveal from 'scrollreveal';
import SectionHeader from './section-header';
import Skillbox from '../styles/skills';
import * as Data from '../data/skillsData';
import { Container, Content } from '../styles/tools';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();
  }

  componentDidMount() {
    // ScrollReveal().reveal(this.ref.current, {
    //   delay: 200,
    //   duration: 1000,
    //   scale: 0.85,
    //   opacity: 0.5,
    // });
  }

  render() {
    return (
      <Container className="section" style={{ position: 'relative' }}>
        <div className="container" ref={this.ref}>
          <SectionHeader title="Tools &amp; Frameworks that I'm good at" color="#000" />
          <div className="tile is-ancestor" style={{ marginTop: '2rem' }}>
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="UI Libs">
                    <Skillbox title="" items={Data.uiFworkBoxes} />
                  </Content>
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="UI Libs">
                    <Skillbox title="" items={Data.reactTools} />
                  </Content>
                  <Content className="tile is-child box" style={{ background: '#fff', boxShadow: '' }} heading="Container Orchestration">
                    <Skillbox title="" items={Data.Container} />
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
