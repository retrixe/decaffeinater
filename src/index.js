import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "",
      process: ""
    };

    this.onStart = this.onStart.bind(this);
  }

  async onStart() {
    await sleep(this.state.time*1000);
    /* Here we will insert our code to call a function named
    killProcess in our electron main process using remote and
    passing the pid argument to that function. */
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span
            className="input-group-addon"
            id="sizing-addon1 basic-addon1">Seconds</span>
          <input
            className="form-control"
            type="number"
            placeholder="Insert amount of time to play."
            value={this.state.time}
            onInput={(e) => this.setState({time: e.target.value})} />
        </div>
        <div className="input-group">
          <span
            className="input-group-addon"
            id="sizing-addon1 basic-addon1">PID</span>
          <input
            className="form-control"
            type="text"
            placeholder="Insert the process name of the app."
           value={this.state.process}
           onInput={(event) => this.setState({process: event.target.value})} />
        </div>
        <button className="btn btn-primary"
         onClick={this.onStart}>Click to start.</button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
