import React from 'react';
import EditorTabs from './EditorTabs';
import ProjectExplorer from './ProjectExplorer';

export default class Editor extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='editor'>
          <ProjectExplorer/>
          <EditorTabs/>
      </div>
    );
  }
}