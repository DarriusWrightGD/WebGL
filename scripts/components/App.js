import React from 'react';
import Editor from './Editor';
import EditorLog from './EditorLog';
import HelloPoint from './demos/HelloPoint';
import Header from './Header';

export default class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          <Header/>
          <div className='app-content'>
            <div className='row'>
              <div className='col-s-12 col-lg-7'>
                <Editor />
              </div>
              <div className='col-s-12 col-lg-5 '>
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
