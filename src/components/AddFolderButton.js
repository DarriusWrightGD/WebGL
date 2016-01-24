import React from 'react';
import mui from 'material-ui';
var {IconButton} = mui;

export default class AddFolderButton extends React.Component{
  render(){
    return (
      <IconButton
        style={{cursor:'pointer'}}
        iconClassName="material-icons"
        tooltip='Add Folder'>
        <span style={{color:'white'}}>create_new_folder</span>
      </IconButton>
    );
  }
}

AddFolderButton.contextTypes = {
  store : React.PropTypes.object
}
