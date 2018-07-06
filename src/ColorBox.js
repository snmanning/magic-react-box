import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          backgroundColor: '#000000',
          firstColor: '#000000',
          secondColor: '#ff0000',
        };
      }

      changeColor1(evt) {
        this.setState({
          firstColor: (evt.target.value),
        })
      }
    
      changeColor2(evt) {
        this.setState({
          secondColor: (evt.target.value),
        })
      }
    
      hex1() {
        this.setState({
          backgroundColor: this.state.firstColor,  
         })
      }

      hex2() {
        this.setState({
          backgroundColor: this.state.secondColor,
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
                <section >
                    <button className='ColorBox-buttons' onClick={this.hex1.bind(this)}> Color 1 </button>
                    <button className='ColorBox-buttons' onClick={this.hex2.bind(this)}> Color 2 </button>
                </section>
                <section className='ColorBox-input'>
                  {/* {this.props.instructions ? <p className='COlorBox-instr'>{this.props.instructions}</p> : null} */}
                    <label className='ColorBox-label' htmlFor='ColorBox-hex1'> Hex Color 1 Input: </label>
                    <input id='ColorBox-hex1'
                            className='ColorBox-hex' 
                            type='color' 
                            pattern='^#+([a-fA-F0-9]{6})$'
                            placeholder='#hex color'
                           onChange={this.changeColor1.bind(this)} >
                    </input>
                    <label className='ColorBox-lebel' htmlFor='ColorBox-hex1'> Hex Color 2 Input: </label>
                    <input id='ColorBox-hex2'
                            className='ColorBox-hex' 
                            label='Hex Color 2'
                            type='text' 
                            pattern='^#+([a-fA-F0-9]{6})$'
                            placeholder='#hex color'
                           onChange={this.changeColor2.bind(this)}>
                    </input>
                </section>
            </div>
        )
    }
}

export default ColorBox