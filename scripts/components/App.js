import React from 'react'
import ReactDOM from 'react-dom'
import ShaderEditor from './ShaderEditor'
import HelloGL from './HelloGL'

export default class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          <HelloGL/>
          <ShaderEditor/>
        </div>
      );
  }
}