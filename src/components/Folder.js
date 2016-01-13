import React from 'react';
import File from './File.js'
import ClosedFolderIcon from 'material-ui/lib/svg-icons/file/folder';
import OpenFolderIcon from 'material-ui/lib/svg-icons/file/folder-open';
import Colors from 'material-ui/lib/styles/colors';
import style from './../style/MainStyle'

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


    var folderIcon;
    var folderContent;

    if(this.state.open){
      folderIcon = (<OpenFolderIcon style={style.projectIcon} />);
      folderContent = <div>
        <div>
          {foldersView}
        </div>
        <div>
          {fileViews}
        </div>
      </div>
    }else{
      folderIcon = (<ClosedFolderIcon style={style.projectIcon}/>);
    }



    return(
      <div className='folder'>
        <span onClick = {this.toggleOpen}>{folderIcon}<span className='project-explorer-text'>{folder.name}</span></span>
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
