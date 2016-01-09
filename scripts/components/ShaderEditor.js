import React from 'react'
import ShaderTabs from './ShaderTabs'
import ShaderLog from './ShaderLog'

export default class ShaderEditor extends React.Component{
  constructor(props){
    super(props)
    this.state = {shaderError : '' , shaderLogOpen: true, showError: false};
  }

  render(){
    return (
      <div>
        <ShaderTabs/>
        <ShaderLog/>
      </div>
    );
  }
}
