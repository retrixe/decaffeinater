import React from 'react';

export default class Countdown extends React.Component {
  render() {
    return (
      <button onClick={this.props.readState}>click me dude</button>
    )
  }
};
