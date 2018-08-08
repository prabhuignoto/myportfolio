import React from 'react';
import SectionHeader from './section-header';
import Skillbox from '../styles/skills';
import * as Data from '../data/skillsData';

const Skills = () => (
  <section className="section" style={{ background: '#247BA0' }}>
    <div className="container">
      <SectionHeader title="Technical Skills" />
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
                <Skillbox title="" items={Data.uiFworkBoxes} />
              </article>
              <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
                <Skillbox title="" items={Data.reactTools} />
              </article>
            </div>
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
                <Skillbox title="" items={Data.Node} />
              </article>
              <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
                <Skillbox title="" items={Data.reactFW} />
              </article>
              <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
                <Skillbox title="" items={Data.test} />
              </article>
              <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
                <Skillbox title="" items={Data.types} />
              </article>
            </div>
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
            <Skillbox title="" items={Data.www} />
          </article>
          <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
            <Skillbox title="" items={Data.ToolChain} />
          </article>
          <article className="tile is-child box" style={{ background: '#fff', boxShadow: '' }}>
            <Skillbox title="" items={Data.Editors} />
          </article>
        </div>
      </div>

    </div>
  </section>
);

export default Skills;
