// @flow
// Import React.
import React from 'react'
import { render } from 'react-dom'
// Import components from material-ui :D
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
// Import main App component.
import App from './App'

// Define the chat sheet contents.
/* eslint-disable no-multi-str */
const cheatSheet1 = "Type in the name of the PROCESS in process name, not the name of the gam\
e. ps ax is your buddy, run this command to find all running processes. If you opened your game j\
ust now, it'll be the 3rd last or so."
const cheatSheet2 = '1 hour = 60 minutes and 1 minute = 60 seconds. You can use both fields a\
t once and the values will be converted and added.'
/* eslint-enable no-multi-str */

// Define our style sheet.
const indexComponentCSS = {
  appBar: {
    position: 'relative',
    marginBottom: 10,
    background: '#00796B'
  },
  paper: {
    marginTop: 10
  },
  cheatSheetStyle: {
    marginLeft: 10,
    marginRight: 10
  },
  cheatSheetStyle2: {
    margin: 10
  }
}

// Define main component.
const Index = () => (
  <div>
    <AppBar style={indexComponentCSS.appBar}>
      <Toolbar>
        <Typography type='title'>
          Decaffeinater - For those who spend too much time on apps :3
        </Typography>
      </Toolbar>
    </AppBar>
    <App />
    <Paper elevation={8} style={indexComponentCSS.paper}>
      <br />
      <Typography type='headline' component='h3' align='center' style={indexComponentCSS.cheatSheetStyle}>Cheat sheet!</Typography>
      <Typography type='body1' component='p' style={indexComponentCSS.cheatSheetStyle2}>{cheatSheet1}</Typography>
      <Typography type='body1' component='p' style={indexComponentCSS.cheatSheetStyle}>{cheatSheet2}</Typography>
      <br />
    </Paper>
  </div>
)

render(<Index />, document.getElementById('app'))
