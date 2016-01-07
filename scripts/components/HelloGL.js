import React from 'react';
import WebGLCanvas from './WebGLCanvas'

export default class  HelloGL extends React.Component{
  
  init(){
    
  }
  
  draw(gl){
    console.log(gl.clearColor);
    gl.clearColor(0,1,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
  
  update(){
    
  }
  
  render(){
    return (
      <WebGLCanvas init={this.init} draw={this.draw} update={this.update}/>
    );
  }
}