import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          backgroundColor: `${#bada55}`,
        };
      }
    
      changeColor(evt) {
        this.setState({
          backgroundColor: parseInt(evt.target.value, 16),
        })
      }
    
      hex1() {
        this.setState({
          backgroundColor: 'green',   
         })
      }

      hex2() {
        this.setState({

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
            <div className='ColorBox'>
                {this.props.title ? <h1 className='ColorBox-title'>{this.props.title}</h1> : null}
                <p className='ColorBox-box' style={boxStyle}>{this.state.backgroundColor}</p>
                <section className='ColorBox-buttons'>
                    <button onClick={this.hex1.bind(this)}> Color 1 </button>
                    <button onClick={this.hex2.bind(this)}> Color 2 </button>
                </section>
                <section className='ColorBox-input'>
                    <label for='ColorBox-hex1'> Hex Color 1 Input </label> <br/>
                    <input id='ColorBox-hex1'
                            className='ColorBox-hex' 
                            type='color' 
                            pattern='^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'
                            placeholder='#hex color'
                           onChange={this.changeColor.bind(this)} >
                    </input>
                    <label for='ColorBox-hex1'> Hex Color 2 Input </label> <br/>
                    <input id='ColorBox-hex2'
                            className='ColorBox-hex' 
                            label='Hex Color 2'
                            type='color' 
                            pattern='^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'
                            placeholder='#hex color'
                           onChange={this.changeColor.bind(this)}>
                    </input>
                </section>
            </div>
        )
    }
}

export default ColorBox