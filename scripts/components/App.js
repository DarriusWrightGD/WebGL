import React from 'react'
import ShaderEditor from './ShaderEditor'
import HelloGL from './HelloGL'
import HelloPoint from './demos/HelloPoint'

export default class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          <HelloPoint/>
          <ShaderEditor/>
        </div>
      );
  }
}