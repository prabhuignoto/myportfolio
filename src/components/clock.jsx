import React, { Component } from 'react';
import { DateTime } from 'luxon';
import { Wrapper, TimeComponent } from '../styles/clock';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: DateTime.local().toLocaleString(DateTime.DATETIME_MED),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: DateTime.local().toLocaleString(DateTime.DATETIME_MED),
      });
    }, 1000);
  }

  render() {
    const { time } = this.state;
    return (
      <Wrapper className="clock-wrapper">
        <TimeComponent>
          {time}
        </TimeComponent>
      </Wrapper>
    );
  }
}
