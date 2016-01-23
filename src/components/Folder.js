import React from 'react';
import File from './File.js';
import Colors from 'material-ui/lib/styles/colors';
import style from 'style/MainStyle';
import mui from 'material-ui';

var {FontIcon} = mui;

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
      folder.folders.forEach((f, index)=>{
        var v = <Folder folder = {f} key = {index}/>;
        foldersView.push(v);
      });
    }

    var fileViews = []
    if(folder.files){
      folder.files.forEach(function(f, index){
        fileViews.push(<File key={index} file = {f}/>);
      })
    }

    console.log('Files : ',fileViews.length);
    fileViews.forEach((f)=>{
      console.log("This is my file:",f.props)
    });
    var folderIcon;
    var folderContent;

    if(this.state.open){
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
Folder.contextTypes = {
  store:React.PropTypes.object
}
