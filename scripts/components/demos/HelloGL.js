import React from 'react';
import WebGLCanvas from './../WebGLCanvas'

export default class  HelloGL extends React.Component{

  init(gl){
    gl.clearColor(0,0,0,1);
  }

  draw(gl){
    var seconds = new Date().getSeconds();
    gl.clearColor(0,Math.sin(seconds),Math.cos(seconds),1);
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
