import React from 'react';
import File from './File.js';
import Colors from 'material-ui/lib/styles/colors';
import style from 'style/MainStyle';
import mui from 'material-ui';

var {FontIcon} = mui;
export default class Folder extends React.Component{
  constructor(props){
    super(props);
  }

  traverseFolder = (folder)=>{
    var foldersView = [];
    if(folder.folders){
      folder.folders.forEach((f, index)=>{
        var v = <Folder {...f} path={this.getPath()} key = {index} onFolderClick= {this.props.onFolderClick} onFileClick= {this.props.onFileClick}/>;
        foldersView.push(v);
      });
    }

    var fileViews = []
    if(folder.files){
      folder.files.forEach((f, index)=>{
        fileViews.push(<File {...f} path={this.getPath()} onFileClick={()=>{this.props.onFileClick(f)}} key={index}/>);
      })
    }

    var folderIcon;
    var folderContent;

    if(this.props.open){
      folderIcon = (<FontIcon style={{color:'white', verticalAlign:'bottom'}} className='material-icons'>folder_open</FontIcon>);
      folderContent = <div>
        <div>
          {foldersView}
        </div>
        <div>
          {fileViews}
        </div>
      </div>
    }else{
      folderIcon = (<FontIcon style={{color:'white', verticalAlign:'bottom'}} className='material-icons'>folder</FontIcon>);
    }

    return(
      <div className='folder'>
        <div
          style={{width:'100%', background:this.hover ? 'grey': 'none'}}
          onMouseOver={()=>{this.hover = true; this.forceUpdate();}}
          onMouseOut={()=>{this.hover = false; this.forceUpdate();}}>
        <span
         onClick = {()=>{this.props.onFolderClick(this.getPath())}}>{folderIcon}<span style={{fontFamily:'Roboto, sans-serif'}}>{folder.name}</span>
         </span>
         <div style={{display:this.hover ? 'inline' : 'none'}}>
           <FontIcon className='material-icons'
             style={{color:'red',position:'absolute',right:0, verticalAlign:'middle', textAlign:'right'}}>
             clear
           </FontIcon>
         </div>
         </div>
        {folderContent}
      </div>
    );
  };

  getPath= ()=>{
    var path = this.props.path === undefined ? this.props.name : this.props.path + '/' + this.props.name;
    return path;
  };

  render(){
    let folderView = this.traverseFolder(this.props);

    return(
      <div>
        {folderView}
      </div>
    );
  }
}
