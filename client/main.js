import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from './inputs';
import Countdown from './countdown'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {command: null, time: 0};
  }

  changeConfig(newConfig, typeOfChange) {
    switch(action.type) {
      case 'CONFIG_CHANGE_COMMAND':
        this.setState({command: newConfig});
      break;

      case 'CONFIG_CHANGE_HOURS':
        this.setState({time: newConfig*3600});
      break;
    }
  }

  readConfig() {
    return this.state;
  }

  render() {
    return (
      <div>
        <Inputs onInput={this.changeConfig} />
        <Countdown readState={this.readConfig} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
