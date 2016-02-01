import React from 'react';
import mui from 'material-ui';
var {IconButton} = mui;

export default ({onClick})=>{
  return (
    <IconButton
      onClick={onClick}
      style={{cursor:'pointer'}}
      iconClassName="material-icons"
      tooltip='Add Program'>
      <span style={{color:'white'}}>library_add</span>
    </IconButton>
  );
}
