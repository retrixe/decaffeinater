import "babel-polyfill";
import {ipcRenderer} from "electron";
import React from "react";
import ReactDOM from "react-dom";

function killProcess(pid) {
  ipcRenderer.send("iCanKill?", pid);
}

function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s*1000));
}

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      process: "",
      countdown: 0
    };

    this.onStart = this.onStart.bind(this);
  }

  async onStart() {
    let i = 0;
    let time = this.state.time*60;
    for (i = 0; i < this.state.time*60; i++) {
      await sleep(1);
      this.setState({countdown: this.state.countdown+1});
    }
    killProcess(this.state.process);
    this.setState({countdown: 0});
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
        <div class="text-xs-center" id="countdown-statement">Time left to finish: {this.state.countdown} out of {this.state.time*60}.</div>
        <progress class="progress" value={this.state.countdown} max={this.state.time*60} aria-describedby="countdown-statement"></progress>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));