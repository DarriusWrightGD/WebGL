import React from 'react';
import ReactDOM from 'react-dom';
import Events from './Events';
import PubSub from 'pubsub-js';

export default class WebGLCanvas extends React.Component{
  constructor(props){
    super(props);
    this.initGL = this.initGL.bind(this);
    this.paint = this.paint.bind(this);
  }

  componentWillMount(){
    this.vsEvent = PubSub.subscribe(Events.vertexShaderUpdateEvent, function(eventType,text){
      console.log("Sub Event text: "+ text);
    });
    this.fsEvent = PubSub.subscribe(Events.fragmentShaderUpdateEvent, function(eventType,text){
      console.log("Sub Event text: "+ text);
    });
  }
  
  componentDidMount(){
    this.initGL(ReactDOM.findDOMNode(this));
    this.props.init();
    this.paint();
  }
  
  initGL(canvas)
  {
    this.gl = null;
    try
    {
      this.gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");    
    }
    catch(e){}
    if(!this.gl){
      this.setState({glError:"Unable to initalize webgl. Your browser may not support it."});
    }
  }
  
  componentDidUpdate(){
    this.props.update();
    this.paint();
    console.log('update');
  }
  
  paint(){
    this.props.draw(this.gl);
  }
  
  vertexShaderChanged(text){
    console.log(text);
  }

  fragmentShaderChanged(text){
    console.log(text);
  }

  render(){
    return (
      <canvas width ={this.props.width} height = {this.props.height}>
        this.state.glError
      </canvas>
    );
  }
}

WebGLCanvas.propTypes = { width: React.PropTypes.number, height: React.PropTypes.number}
WebGLCanvas.defaultProps = {width: 400, height: 400}