import React from 'react';
import { connect } from 'react-redux';
import { changeConfig } from './actions/change_config';
import { bindActionCreators } from 'redux';

export default class Inputs extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input
            placeholder="Type the command to execute the program."
            className="col-sm-4"
            onInputChange={() => this.props.onInput(e.target.value, 'COMMAND')} />
          <input
            placeholder="Enter the hours to play."
            className="col-sm-4"
            onInputChange={this.props.onInput(e.target.value, 'HOURS')} />
        </div>
      </div>
    )
  }
}
