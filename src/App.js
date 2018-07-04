import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      color: "blue"
    };
  }

  red() {
    this.setState({
      color: "red"
    })
  }

  green() {
    this.setState({
      color: "green"
    })
  }

  render() {
    return (
      <div className="App">
          <span className="box">{this.state.color}</span>
          <button onClick={this.red.bind(this)}> Red </button>
          <button onClick={this.green.bind(this)}> Green </button>
      </div>
    );
  }
}

export default App;
