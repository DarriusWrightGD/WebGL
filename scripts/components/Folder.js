import React from 'react';
import File from './File.js'
export default class Folder extends React.Component{
  constructor(props){
    super(props);
    this.state = {folder: this.props.folder};
    this.traverseFolder = this.traverseFolder.bind(this)
  }

  traverseFolder(folder){
    var foldersView = [];
    if(folder.folders){
      folder.folders.forEach(function(f){
        foldersView.push(this.traverseFolder(f));
      }.bind(this));
    }

    var fileViews = []
    if(folder.files){
      folder.files.forEach(function(f, index){
        fileViews.push(<File key={index} file = {f}/>);
      })
    }

    return <div className='folder'>
        <span><span className='glyphicon glyphicon-folder-open folder-icon'/>{folder.name}</span>
        <div>
          {foldersView}
        </div>
        <div>
          {fileViews}
        </div>
      </div>
  }

  render(){
    var folderView = this.traverseFolder(this.state.folder);
    return(
      <div>
        {folderView}
      </div>
    );
  }
}
