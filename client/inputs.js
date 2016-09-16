import React from 'react';

export default class Inputs extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input
            placeholder="Type the PID of the program."
            className="col-sm-4"
            onInput={(e) => this.props.onInput(e.target.value, 'COMMAND')} />
          <input
            placeholder="Enter the hours to play."
            className="col-sm-4"
            onInput={(e) => this.props.onInput(e.target.value, 'HOURS')} />
        </div>
      </div>
    )
  }
}
