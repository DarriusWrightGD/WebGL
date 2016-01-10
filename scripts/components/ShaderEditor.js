import React from 'react'
import ShaderTabs from './ShaderTabs'

export default class ShaderEditor extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='shader-editor inline-block'>
        <ShaderTabs/>
      </div>
    );
  }
}
