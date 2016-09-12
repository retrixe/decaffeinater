import React from 'react';
import { connect } from 'react-redux';
import { changeConfig } from './actions/change_config';
import { bindActionCreators } from 'redux';

class Inputs extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input
            placeholder="Type the command to execute the program."
            className="col-sm-4"
            onInputChange={this.changeConfig(e.target.value, 'COMMAND')} />
          <input
            placeholder="Enter the hours to play."
            className="col-sm-4"
            onInputChange={this.changeConfig(e.target.value, 'HOURS')} />
          <input
            placeholder="Enter the minutes to play."
            className="col-sm-4"
            onInputChange={this.changeConfig(e.target.value, 'MINUTES')} />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeConfig: changeConfig }, dispatch);
};

export default connect(mapDispatchToProps)("store", Inputs);
