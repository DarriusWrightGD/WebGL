import React from 'react';
import mui from 'material-ui';

var {FlatButton} = mui;

export default ({onClose,onSubmit})=>{
  return (
    <div>
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={()=>{onClose()}} />
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={()=>{onSubmit()}} />
    </div>
  );
}
