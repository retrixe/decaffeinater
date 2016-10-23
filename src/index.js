import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      process: "gg"
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({time: 1})}>u mad bro? trololol *insert lenny face*</button>
        <p>{this.state.process} is the process and {this.state.time} is the time alotted to the program.</p>
      </div>
    ); 
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));