import React from 'react';
import WebGLCanvas from './../WebGLCanvas'

export default class  HelloPoint extends React.Component{
  
  init(gl){
    gl.clearColor(0,0,0,1);
  }
  
  draw(gl){
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(gl.POINTS,0,1);
  }
  
  update(){

  }
  
  render(){
    return (
      <WebGLCanvas init={this.init} draw={this.draw} update={this.update}/>
    );
  }
}