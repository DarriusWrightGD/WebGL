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
    .setBegin(this.initGL)
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
    this.gl = null;
    try{
      this.gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e){
      this.setState({glErrorMessage : e.message});
    }

    if(!this.gl){
      this.setState({glError:"Unable to initalize webgl. Your browser may not support it."});
    }

    this.props.init(this.gl);
  };

  compileShader= (shaderSource,shaderType)=>{
    var shader = this.gl.createShader(shaderType);
    this.gl.shaderSource(shader,shaderSource);
    this.gl.compileShader(shader);

    var success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
    if(!success){
      var errorMessage = 'could not compile shader : ' + this.gl.getShaderInfoLog(shader)
      this.gl.deleteShader(shader);
      throw new Error(errorMessage);
    }

    return shader;
  };

  compileShaders= ()=>{
    return {
      vertexShader: this.compileShader(this.vertexShader,this.gl.VERTEX_SHADER),
      fragmentShader: this.compileShader(this.fragmentShader,this.gl.FRAGMENT_SHADER)
    };
  };

  compileProgram= ()=>{
    try{
      var shaders = this.compileShaders();
      this.program = this.gl.createProgram();
      this.gl.attachShader(this.program,shaders.vertexShader);
      this.gl.attachShader(this.program,shaders.fragmentShader);
      this.gl.linkProgram(this.program);

      var success = this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS);

      if(!success){
        this.gl.deleteProgram(this.program);
      }else{
        this.gl.useProgram(this.program);
      }
    }catch(e){

    }
  };

  componentDidUpdate(){
    this.props.update();
    this.paint();
  }

  paint= ()=>{
    this.props.draw(this.gl);
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
