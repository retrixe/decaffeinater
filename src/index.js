import "babel-polyfill";                     // polyfill to use async/await.
import {ipcRenderer} from "electron";        // ipc communication to main process.
import React from "react";
import ReactDOM from "react-dom";
import {MuiThemeProvider, RaisedButton, TextField} from "material-ui";       // material design based ui framework.

// Needed for onTouchTap in material-ui http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

// Sends ipc message to main process to kill app when called.
function killProcess(pid) {
  ipcRenderer.send("iCanKill?", pid);
}

// sleep function to wait for some time.
function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s*1000));
}

// Our main React component (and only one)
class Index extends React.Component {
  constructor(props) {
    super(props);

    // Set up initial configuration for state.
    this.state = {
      time: 0,
      process: "",
      countdown: 0
    };

    // Bind functions here.
    this.onStart = this.onStart.bind(this);
  }

  // click handler to start the countdown till process terminates.
  async onStart() {
    // initial variables here.
    let i = 0;
    // following 2 lines prevents user from tampering state during countdown. 
    let time = this.state.time*60;
    let process = JSON.parse(JSON.stringify(this.state)).process;
    // wait 1 second, then add 1 to this.state.countdown for (time) times.
    for (i = 0; i < this.state.time*60; i++) {
      await sleep(1);
      this.setState({countdown: this.state.countdown+1});
    }
    killProcess(process);                 // send ipc message to main proc to kill process.
    this.setState({countdown: 0});        // reset countdown :D
  }

  // This function is big, but it's 90% styling, nothing of interest here.
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            floatingLabelText="Time (in minutes)"
            type="number" fullWidth={true}
            hintText="Insert amount of time to play."
            value={this.state.time}
            onChange={(e) => this.setState({time: e.target.value})} />
          <br />
          <TextField
            floatingLabelText="Process name"
            type="text" fullWidth={true}
            hintText="Insert the process name of the app."
            value={this.state.process}
            onChange={(event) => this.setState({process: event.target.value})} />
          <br />
          <RaisedButton onTouchTap={this.onStart} label="Click to start" primary={true} fullWidth={true} />
          <br />
          <div className="text-xs-center" id="countdown-statement">Time left to finish: {this.state.time*60-this.state.countdown} seconds left, out of {this.state.time*60} seconds.</div>
          <progress className="progress" style={{width: "100%"}} value={this.state.countdown} max={this.state.time*60} aria-describedby="countdown-statement"></progress>
        </div>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();
// Render final app to the screen :D
ReactDOM.render(<Index />, document.getElementById("app"));