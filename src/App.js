// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import { ipcRenderer } from 'electron'       // ipc communication to main process.
import React from 'react'
// Following imports for material-ui, React components based on material-ui
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Text from 'material-ui/Typography'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'

// React component state types.
type state = {
  time: number,
  process: string,
  countdown: number,
  hours: number,
  inProcess: boolean
}

// Our main React component (and only one)
export default class App extends React.Component<{}, state> {
  constructor () {
    super()

    // Set up initial configuration for state.
    this.state = {
      time: 0,
      process: '',
      countdown: 0,
      hours: 0,
      inProcess: false
    }
  }

  // click handler to start the countdown till process terminates.
  async onStart () {
    // initial variables here.
    let i = 0
    // following 3 lines prevents user from tampering state during countdown.
    const currentState: state = JSON.parse(JSON.stringify(this.state))
    const time = (currentState.time * 60) + (currentState.hours * 3600)
    const process = currentState.process
    this.setState({ inProcess: true })
    // wait 1 second, then add 1 to this.state.countdown for (time) times.
    for (i = 0; i < time; i += 1) {
      // eslint-disable-next-line
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setState({ countdown: this.state.countdown + 1 })
    }
    ipcRenderer.send('iCanKill?', process)     // send ipc message to main proc to kill process.
    this.setState({ countdown: 0, inProcess: false })          // reset countdown :D
  }

  // This function is big, but it's 90% styling, nothing of interest here.
  render () {
    const absTimer = (this.state.time * 60) + (this.state.hours * 3600)
    const countdown = this.state.countdown
    return (
      <Paper elevation={8}>
        <div style={{ height: '10px' }} />
        <TextField
          label='Time (in hours)'
          type='number'
          style={{ marginRight: 10, marginLeft: 10, fontFamily: 'Roboto' }}
          value={this.state.hours}
          placeholder='Insert amount of time to play in hours.'
          onChange={(e: { target: { value: number }}) => {
            if (!this.state.inProcess) {
              this.setState({ hours: e.target.value })
            }
          }}
        />
        <TextField
          label='Time (in minutes)'
          type='number'
          style={{ margin: 10, fontFamily: 'Roboto' }}
          value={this.state.time}
          placeholder='Insert amount of time to play in minutes.'
          onChange={(e) => {
            if (!this.state.inProcess) {
              this.setState({ time: e.target.value })
            }
          }}
        />
        <TextField
          label='Process'
          type='text'
          style={{ margin: 10, fontFamily: 'Roboto' }}
          value={this.state.process}
          placeholder='Insert the process name of the app.'
          onChange={(e) => {
            if (!this.state.inProcess) {
              this.setState({ process: e.target.value })
            }
          }}
        />
        {/* fix progress */}
        <Button
          onClick={this.onStart}
          raised
          accent
          style={{ marginBottom: 10, marginLeft: 10 }}
        >Click to start timer.</Button>
        <br />
        <LinearProgress
          style={{ marginLeft: 10, marginBottom: 10, marginRight: 10 }}
          value={(countdown / absTimer) * 100}
          mode='determinate'
        />
        <Text
          type='caption'
          style={{ marginLeft: 10, paddingBottom: 10 }}
        >Time left: {absTimer - countdown} seconds left, out of {absTimer} seconds.</Text>
      </Paper>
    )
  }
}
