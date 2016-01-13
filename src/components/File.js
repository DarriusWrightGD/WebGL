import React from 'react';
import Events from './Events';
import PubSub from 'pubsub-js';

export default class File extends React.Component{
  constructor(props){
    super(props);
    this.state = {file: this.props.file};
  }

  render(){
    return(
      <div className='file' onClick={()=>{PubSub.publish(Events.fileSelectedEvent, this.state.file)}}>
        <span><span className='glyphicon glyphicon-file file-icon'/>{this.state.file.name}</span>
      </div>
    );
  }
}
