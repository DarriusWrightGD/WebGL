import React from 'react'

export class WebGLCanvas extends React.Component{
  render(){
    return (
      <canvas width ='400' height = '400'>
        Please use a broswer that supports "canvas"
      </canvas>
    );
  }
}

module.exports = WebGLCanvas;