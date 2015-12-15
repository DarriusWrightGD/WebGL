import React from 'react'
import ReactDOM from 'react-dom'
import WebGLCanvas from './WebGLCanvas'
import ShaderEditor from './ShaderEditor'


export default class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          <WebGLCanvas/>
          <ShaderEditor/>
        </div>
      );
  }
}