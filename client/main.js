import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from './inputs';
import Countdown from './countdown'

class App extends React.Component {
  render() {
    return (
      <div>
        <Inputs />
        <Countdown />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
