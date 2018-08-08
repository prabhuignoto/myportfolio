import React, { Component } from 'react';
import { Shapes, Shape, ShapeContent } from '../styles/shape';

const sectionData = [
  {
    name: 'Skills',
    id: 'skills',
    type: 1,
  }, {
    name: 'Projects',
    id: 'my-projects',
    type: 2,
  }, {
    name: 'Experience',
    id: 'experience',
    type: 3,
  },
  {
    name: 'Contact',
    id: 'contact',
    type: 4,
  },
];

class ShapeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: '',
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({
      animation: 'expand',
    });
  }

  onMouseLeave() {
    this.setState({
      animation: 'leave',
    });
  }

  render() {
    const { animation } = this.state;
    return (
      <Shape
        {...this.props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        animation={animation}
      />
    );
  }
}

const ShapesView = () => (
  <Shapes className="is-hidden-touch">
    {sectionData.map(x => (
      <ShapeView key={x.name} type={x.type} name={x.name} />
    ))}
  </Shapes>
);

export default ShapesView;
