import React from 'react';
import { connect } from 'react-redux';

export class Countdown extends React.Component {
  render() {
    return (
      <div>{this.props.readState}</div>
    )
  }
};
