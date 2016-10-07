import React from 'react';

export default class Inputs extends React.Component {
  render() {
    return (
      <div>
        <input
          placeholder="Type the command to execute the program."
          className="col-sm-4"
          onInput={(e) => this.props.changeConfig(e.target.value, 'pid')} />
        <input
          placeholder="Enter the minutes to play."
          className="col-sm-4"
          onInput={(e) => this.props.changeConfig(e.target.value, 'hours')} />
      </div>
    )
  }
};
