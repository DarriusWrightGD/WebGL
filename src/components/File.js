import React from 'react';
import {Component,PropTypes} from 'react';
import Events from './Events';
import PubSub from 'pubsub-js';
import mui from 'material-ui'
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import FileIcon from 'material-ui/lib/svg-icons/editor/insert-drive-file';
import style from './../style/MainStyle';

export default class File extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {store} = this.context;
    return(
      <div className='file' onClick={()=>{
        store.dispatch({ type : Events.fileSelectedEvent,file: this.props.file})
      }}>
        <span><FileIcon style={style.projectIcon}/><span className='project-explorer-text'>{this.props.file.name}</span></span>
      </div>
    );
  }
}

File.contextTypes = {
  store: PropTypes.object
}
