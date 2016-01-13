import React from 'react';
import File from './File.js'
export default class Folder extends React.Component{
  constructor(props){
    super(props);
    this.state = {folder: this.props.folder, open:false};
    this.traverseFolder = this.traverseFolder.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  traverseFolder(folder){
    var foldersView = [];
    if(folder.folders){
      folder.folders.forEach(function(f, index){
        var v = <Folder folder = {f} key = {index}/>;
        foldersView.push(v);
      }.bind(this));
    }

    var fileViews = []
    if(folder.files){
      folder.files.forEach(function(f, index){
        fileViews.push(<File key={index} file = {f}/>);
      })
    }


    var openClass;
    var folderContent;

    if(this.state.open){
      openClass ='glyphicon glyphicon-folder-open folder-icon';
      folderContent = <div>
        <div>
          {foldersView}
        </div>
        <div>
          {fileViews}
        </div>
      </div>
    }else{
      openClass = 'glyphicon glyphicon-folder-close folder-icon';
    }



    return(
      <div className='folder'>
        <span onClick = {this.toggleOpen}><span className={openClass}/>{folder.name}</span>
        {folderContent}
      </div>
    );
  }

  toggleOpen(){
    this.setState({open:!this.state.open});
  }

  render(){
    let folderView = this.traverseFolder(this.state.folder);

    return(
      <div>
        {folderView}
      </div>
    );
  }
}
