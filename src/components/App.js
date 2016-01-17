import React from 'react';
import {Component,PropTypes} from 'react';
import Editor from './Editor';
import EditorLog from './EditorLog';
import HelloPoint from './demos/HelloPoint';
import Header from './Header';

import mui from 'material-ui';


class App extends Component{

  constructor(props, context){
    super(props,context);
    var {store} = context;
  }

  render(){
    return (
        <div>
          <Header/>
          <div>
            <div style={{display:'flex',
              flexFlow:'row wrap',
              maxWidth:1300,
              width:'100%',
              margin: '10px auto 10px'
              }}>
              <div style={{
                flexGrow:4
              }}>
                <Editor />
              </div>
              <div style={{
                flexGrow:1
              }}>
                <div className='gl-preview-container'>
                  <HelloPoint/>
                </div>
              </div>
            </div>
            <EditorLog/>
          </div>
        </div>
      );
  }
}

App.contextTypes = {
  store: PropTypes.object
}

export default App;
