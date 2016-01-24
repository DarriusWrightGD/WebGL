import React from 'react';
import File from './File.js';
import Colors from 'material-ui/lib/styles/colors';
import style from 'style/MainStyle';
import mui from 'material-ui';
import Events from './Events';

var {FontIcon} = mui;

export default class Folder extends React.Component{
  constructor(props){
    super(props);
    this.traverseFolder = this.traverseFolder.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this);
    this.getPath = this.getPath.bind(this);
  }

  traverseFolder(folder){
    var foldersView = [];
    if(folder.folders){
      folder.folders.forEach((f, index)=>{
        var v = <Folder {...f} path={this.getPath()} key = {index}/>;
        foldersView.push(v);
      });
    }

    var fileViews = []
    if(folder.files){
      folder.files.forEach(function(f, index){
        fileViews.push(<File {...f} key={index}/>);
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
    var clearButton;

    return(
      <div className='folder'>
        <div
          style={{width:'100%', background:this.hover ? 'grey': 'none'}}
          onMouseOver={()=>{this.hover = true; this.forceUpdate();}}
          onMouseOut={()=>{this.hover = false; this.forceUpdate();}}>
        <span
         onClick = {this.toggleOpen}>{folderIcon}<span style={{fontFamily:'Roboto, sans-serif'}}>{folder.name}</span>
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
  }

  getPath(){
    var path = this.props.path === undefined ? this.props.name : this.props.path + '/' + this.props.name;
    return path;
  }

  toggleOpen(){
    const {store} = this.context;
    store.dispatch({type:Events.folderClickedEvent, path:this.getPath()});
  }

  render(){
    let folderView = this.traverseFolder(this.props);
    return(
      <div>
        {folderView}
      </div>
    );
  }
}
Folder.contextTypes = {
  store:React.PropTypes.object
}
