import "babel-polyfill";                     // polyfill to use async/await.
import {ipcRenderer} from "electron";        // ipc communication to main process.
import React from "react";
import ReactDOM from "react-dom";
// Following imports for semantic ui, awsm CSS framework :D
import {Button, Input, Progress} from "semantic-ui-react";

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
      <div>
        <Input
          label="Time (in minutes)"
          type="number" fluid
          placeholder="Insert amount of time to play."
          onChange={(e) => this.setState({time: e.target.value})} />
        <Input
          label="Process"
          type="text" fluid
          placeholder="Insert the process name of the app."
          onChange={(event) => this.setState({process: event.target.value})} />
        <br />
        <Button onClick={this.onStart} content="Click to start" inverted fluid color="green" />
        <br />
        <div>Time left to finish: {this.state.time*60-this.state.countdown} seconds left, out of {this.state.time*60} seconds.</div>
        <Progress value={this.state.countdown} indicating total={this.state.time*60} />>
      </div>
    );
  }
}

// Render final app to the screen :D
ReactDOM.render(<Index />, document.getElementById("app"));