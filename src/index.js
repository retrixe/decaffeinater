import "babel-polyfill";                     // polyfill to use async/await.
/* eslint-disable import/no-extraneous-dependencies */
import { ipcRenderer } from "electron";        // ipc communication to main process.
import React from "react";
import ReactDOM from "react-dom";
// Following imports for semantic-ui, awsm CSS framework :D
// eslint-disable-next-line no-unused-vars
import { Button, Input, Progress, Segment } from "semantic-ui-react";

// sleep function to wait for some time.
function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}

// Our main React component (and only one)
// eslint-disable-next-line no-unused-vars
class Index extends React.Component {
  constructor(props) {
    super(props);

    // Set up initial configuration for state.
    this.state = {
      time: 0,
      process: "",
      countdown: 0,
      hours: 0,
      inProcess: false,
    };

    // Bind functions here.
    this.onStart = this.onStart.bind(this);
  }

  // click handler to start the countdown till process terminates.
  async onStart() {
    // initial variables here.
    let i = 0;
    // following 3 lines prevents user from tampering state during countdown.
    const currentState = JSON.parse(JSON.stringify(this.state));
    const time = (currentState.time * 60) + (currentState.hours * 3600);
    const process = JSON.parse(JSON.stringify(this.state)).process;
    this.setState({ inProcess: true });
    // wait 1 second, then add 1 to this.state.countdown for (time) times.
    for (i = 0; i < time; i += 1) {
      await sleep(1);
      this.setState({ countdown: this.state.countdown + 1 });
    }
    ipcRenderer.send("iCanKill?", process);     // send ipc message to main proc to kill process.
    this.setState({ countdown: 0, inProcess: false });          // reset countdown :D
  }

  // This function is big, but it's 90% styling, nothing of interest here.
  render() {
    const absTimer = this.state.time * 60 + this.state.hours * 3600;
    return (
      <Segment style={{ margin: "12px" }} raised>
        <Input
          label="Time (in hours)"
          type="number" fluid
          placeholder="Insert amount of time to play in hours."
          onChange={(e) => {
            if (!this.state.inProcess) {
              this.setState({ hours: e.target.value });
            }
          }}
        />
        <Input
          label="Time (in minutes)"
          type="number" fluid
          placeholder="Insert amount of time to play in minutes."
          onChange={(e) => {
            if (!this.state.inProcess) {
              this.setState({ time: e.target.value });
            }
          }}
        />
        <Input
          label="Process"
          type="text" fluid
          placeholder="Insert the process name of the app."
          onChange={(e) => {
            if (!this.state.inProcess) {
              this.setState({ process: e.target.value });
            }
          }}
        />
        <br />
        <Button onClick={this.onStart} content="Click to start" inverted fluid color="green" />
        <br />
        <div />
        <Progress
          value={this.state.countdown}
          total={absTimer}
          indicating autoSuccess
          color="teal"
        >Time left: {absTimer - this.state.countdown} seconds left, out of {absTimer} seconds.
        </Progress>
      </Segment>
    );
  }
}

// Render final app to the screen :D
ReactDOM.render(<Index />, document.getElementById("app"));
