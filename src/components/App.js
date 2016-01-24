import React from 'react';
import {Component,PropTypes} from 'react';
import Editor from './Editor';
import EditorLog from './EditorLog';
import HelloPoint from './demos/HelloPoint';
import Header from './Header';

class App extends Component{

  constructor(props, context){
    super(props,context);
  }

  render(){
    const {store} = this.context;
    const state = store.getState();

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
                <Editor {...state.editor}/>
              </div>
              <div style={{
                flexGrow:1
              }}>
                <div className='gl-preview-container'>
                  <HelloPoint/>
                </div>
              </div>
            </div>
            <EditorLog errorLog={state.editor.errorLog}/>
          </div>
        </div>
      );
  }
}

App.contextTypes = {
  store: PropTypes.object
}

export default App;
