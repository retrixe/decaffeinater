import React from 'react';
import { connect } from 'react-redux';

class Countdown extends React.Component {
  render() {
    return (
      <div>{this.props.config.command}</div>
    )
  }
};

function mapStateToProps(state) {
  return {
    config: state.config
  };
};

export default connect(mapStateToProps)(Countdown);
