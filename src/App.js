import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'blue',
    };
  }

  red() {
    this.setState({
      backgroundColor: 'red',
    })
  }

  green() {
    this.setState({
      backgroundColor: 'green',    })
  }

  render() {
    const style = {
            boxStyle: {
              backgroundColor: this.state.backgroundColor,
            }
          };
    const {boxStyle} = style;
    return (
      <div className="App">
          <span className="box" style={boxStyle}>{this.state.backgroundColor}</span>
          <button onClick={this.red.bind(this)}> Red </button>
          <button onClick={this.green.bind(this)}> Green </button>
      </div>
    );
  }
}

export default App;
