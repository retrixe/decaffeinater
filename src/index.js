import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

function killProcess(pid) {
  const exec = require("child_process").exec;
  const child = exec("killall -9" + pid, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}

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
    await sleep(this.state.time*1000*60);
    killProcess(this.state.process);
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span
            className="input-group-addon"
            id="sizing-addon1 basic-addon1">Minutes</span>
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
            id="sizing-addon1 basic-addon1">Process</span>
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
