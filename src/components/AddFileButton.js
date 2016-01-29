import React from 'react';
import mui from 'material-ui';
import Events from './Events';

var {IconButton} = mui;

export default ({onClick})=>{
  return (
    <IconButton
      onClick={onClick}
      style={{cursor:'pointer'}}
      iconClassName="material-icons"
      tooltip='Add File'>
      <span style={{color:'white'}}>note_add</span>
    </IconButton>
  );
}
