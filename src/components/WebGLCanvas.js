import React from 'react';
import ReactDOM from 'react-dom';
import Events from './Events';
import MainLoop from 'mainloop.js';

export default class WebGLCanvas extends React.Component{
  constructor(props){
    super(props);
  }


  componentWillUnmount(){
    this.loop.stop();
  }

  componentDidMount(){
    this.initGL(ReactDOM.findDOMNode(this));
    this.loop = MainLoop
    .setMaxAllowedFPS(60)
    .setUpdate(this.props.update)
    .setDraw(function(){
      this.forceUpdate();
    }.bind(this));
    this.loop.start();
  }

  shouldComponentUpdate(){
    return false;
  }

  initGL= ()=>{
    var canvas = ReactDOM.findDOMNode(this);
    try{
      gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e){
      this.setState({glErrorMessage : e.message});
    }

    if(!gl){
      this.setState({glError:"Unable to initalize webgl. Your browser may not support it."});
    }

    this.props.init(gl);
  };

  compileShader= (shaderSource,shaderType)=>{
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader,shaderSource);
    gl.compileShader(shader);

    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(!success){
      var errorMessage = 'could not compile shader : ' + gl.getShaderInfoLog(shader)
      gl.deleteShader(shader);
      throw new Error(errorMessage);
    }

    return shader;
  };

  compileShaders= ()=>{
    return {
      vertexShader: this.compileShader(this.vertexShader,gl.VERTEX_SHADER),
      fragmentShader: this.compileShader(this.fragmentShader,gl.FRAGMENT_SHADER)
    };
  };

  compileProgram= ()=>{
    try{
      var shaders = this.compileShaders();
      this.program = gl.createProgram();
      gl.attachShader(this.program,shaders.vertexShader);
      gl.attachShader(this.program,shaders.fragmentShader);
      gl.linkProgram(this.program);

      var success = gl.getProgramParameter(this.program, gl.LINK_STATUS);

      if(!success){
        gl.deleteProgram(this.program);
      }else{
        gl.useProgram(this.program);
      }
    }catch(e){

    }
  };

  componentDidUpdate(){
    this.props.update();
    this.paint();
  }

  paint= ()=>{
    this.props.draw(gl);
  };

  vertexShaderChanged(text){
    this.vertexShader = text;
    this.compileProgram();
  }

  fragmentShaderChanged(text){
    this.fragmentShader = text;
    this.compileProgram();
  }

  render(){
    return (
      <canvas className='gl-canvas' height = {this.props.height} width = {this.props.width}>
        this.state.glError
        this.state.glErrorMessage
      </canvas>
    );
  }
}

WebGLCanvas.propTypes = { width: React.PropTypes.number, height: React.PropTypes.number}
WebGLCanvas.defaultProps = {width: 500, height: 500}
