import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
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
          backgroundColor: 'green',   
         })
      }
    
    render() {
        const style = {
            boxStyle: {
              backgroundColor: this.state.backgroundColor,
            }
          };
        const {boxStyle} = style;
        return (
            <div className="ColorBox">
                {this.props.title ? <h1 className='ColorBox-title'>{this.props.title}</h1> : null}
                <p className="ColorBox-box" style={boxStyle}>{this.state.backgroundColor}</p>
                <section className='COlorBox-buttons'>
                    <button onClick={this.red.bind(this)}> Red </button>
                    <button onClick={this.green.bind(this)}> Green </button>
                </section>
                <section className="ColorBox-input">
                    <input></input>
                    <input></input>
                </section>
            </div>
        )
    }
}

export default ColorBox