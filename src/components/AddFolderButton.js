import React from 'react';
import mui from 'material-ui';
var {IconButton} = mui;

export default ({onClick})=>{
  return (
    <IconButton
      onClick={onClick}
      style={{cursor:'pointer'}}
      iconClassName="material-icons"
      tooltip='Add Folder'>
      <span style={{color:'white'}}>create_new_folder</span>
    </IconButton>
  );
}
