import Img from 'gatsby-image';
import { shape } from 'prop-types';
import React, { Component } from 'react';
import { Shape, Shapes } from '../styles/shape';
import ImgType from '../types';

const sectionData = [
  {
    name: 'Skills',
    id: 'skills',
    type: 1,
  },
];

class ShapeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Shape {...this.props} />;
  }
}

const ShapesView = ({ heroImage }) => (
  <Shapes className="shapes">
    {sectionData.map((x) => (
      <ShapeView key={x.name} type={x.type} name={x.name}>
        <Img
          fluid={heroImage}
          alt="hero-image-mirror"
          className="shape-image-wrapper"
          outerWrapperClassName="shape-image-outer-wrapper"
          placeholderStyle={
            {
              // height: '46rem',
            }
          }
        />
      </ShapeView>
    ))}
  </Shapes>
);

ShapesView.propTypes = {
  heroImage: shape(ImgType).isRequired,
};

export default ShapesView;
