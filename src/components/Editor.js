import React from 'react';
import EditorTabs from './EditorTabs';
import ProjectExplorer from './ProjectExplorer';

export default class Editor extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div style={{display:'flex',
        flexFlow:'row wrap',
        maxWidth:1200,
        width:'100%',
        margin: '30px auto 0'
      }}>
          <div style={{
            flexGrow: 1,
          }}>
          <ProjectExplorer/>
          </div>
          <div style={{
            flexGrow: 4,
            maxHeight:300
          }}>
          <EditorTabs/>
          </div>
      </div>
    );
  }
}
