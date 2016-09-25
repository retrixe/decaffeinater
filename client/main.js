import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from './inputs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pid: 99999999999,
      hours: 0,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Inputs />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
