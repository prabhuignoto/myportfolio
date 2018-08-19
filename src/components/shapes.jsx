import React, { Component } from 'react';
import Img from 'gatsby-image';
import { any } from 'prop-types';
import { Shapes, Shape } from '../styles/shape';

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
    this.state = {
    };
  }

  render() {
    return (
      <Shape
        {...this.props}
      />
    );
  }
}

const ShapesView = ({ heroImage }) => (
  <Shapes className="is-hidden-touch">
    {sectionData.map(x => (
      <ShapeView key={x.name} type={x.type} name={x.name}>
        <Img sizes={heroImage.sizes} alt="hero-image-mirror" />
      </ShapeView>
    ))}
  </Shapes>
);

ShapesView.propTypes = {
  heroImage: any,
};

export default ShapesView;
