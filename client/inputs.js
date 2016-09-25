import React from 'react';

export default class Inputs extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input
            placeholder="Type the command to execute the program."
            className="col-sm-4"
            onInput={(e) => this.props.changeConfig(e.target.value, 'PID')} />
          <input
            placeholder="Enter the hours to play."
            className="col-sm-4"
            onInput={(e) => this.props.changeConfig(e.target.value, 'HOURS')} />
        </div>
      </div>
    )
  }
};
