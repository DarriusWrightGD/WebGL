import React from 'react';
import mui from 'material-ui';
import Events from './Events';

var {IconButton} = mui;

export default class AddFileButton extends React.Component{
  constructor(props,context){
    super(props,context);
    this.store = context.store;
  }

  open= ()=>{
      this.store.dispatch({type:Events.openFileDialogEvent});
  };

  render(){
    return (
      <IconButton
        onClick={this.open}
        style={{cursor:'pointer'}}
        iconClassName="material-icons"
        tooltip='Add File'>
        <span style={{color:'white'}}>note_add</span>
      </IconButton>
    );
  }
}

AddFileButton.contextTypes = {
  store: React.PropTypes.object
}
