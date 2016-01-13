import React from 'react';
import Editor from './Editor';
import EditorLog from './EditorLog';
import HelloPoint from './demos/HelloPoint';
import Header from './Header';

import mui from 'material-ui';
import ShaderAppTheme from './../themes/ShaderAppTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

export default class App extends React.Component{

  constructor(props){
    super(props);
  }

  static get childContextTypes(){
    return {
      muiTheme:React.PropTypes.object
    };
  }

  getChildContext(){
    return {
      muiTheme: ThemeManager.getMuiTheme(ShaderAppTheme)
    }
  }

  render(){
    return (
        <div>
          <Header/>
          <div>
            <div style={{display:'flex',
              flexFlow:'row wrap',
              maxWidth:1400,
              width:'100%',
              margin: '10px auto 10px'
              }}>
              <div style={{
                flexGrow:3
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
