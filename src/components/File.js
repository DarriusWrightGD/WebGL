import React from 'react';
import Events from './Events';
import PubSub from 'pubsub-js';
import mui from 'material-ui'
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import FileIcon from 'material-ui/lib/svg-icons/editor/insert-drive-file';
import style from './../style/MainStyle';

export default class File extends React.Component{
  constructor(props){
    super(props);
    this.state = {file: this.props.file};
  }

  render(){
    return(
      <div className='file' onClick={()=>{PubSub.publish(Events.fileSelectedEvent, this.state.file)}}>
        <span><FileIcon style={style.projectIcon}/><span className='project-explorer-text'>{this.state.file.name}</span></span>
      </div>
    );
  }
}
