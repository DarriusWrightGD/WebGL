import React from 'react'
import HelloCanvas from './demos/HelloCanvas'
    
export default class WebGLCanvas extends React.Component{
  constructor(props){
    super(props);  
  }
  
  tick(){
      console.log('This ref : ' + this.refs);      
  }

  render(){
    return (
      <canvas width ='400' height = '400' ref="glCanvas">
        Please use a broswer that supports "canvas"
        <HelloCanvas canvas={this.refs.glCanvas} />
      </canvas>
    );
  }
}