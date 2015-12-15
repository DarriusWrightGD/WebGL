import React from 'react'
import Events from './Events'
import PubSub from 'pubsub-js'

export default class WebGLCanvas extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    PubSub.subscribe(Events.vertexShaderUpdateEvent, function(eventType,text){
      console.log("Sub Event text: "+ text);
    })
  }

  vertexShaderChanged(text){
    console.log(text);
  }

  fragmentShaderChanged(text){
    console.log(text);
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