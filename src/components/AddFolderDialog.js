import React from 'react';
import mui from 'material-ui';
import Events from './Events';

var {IconButton, FlatButton, Dialog, TextField, MenuItem, SelectField} = mui;

export default ({title, open,
  fileExplorer,
  onClose, onAddFolder,
  pathMessage, folderMessage
  })=>{
  let folderName;
  let path;

  const actions = <div>
    <FlatButton
      label="Cancel"
      secondary={true}
      onTouchTap={()=>{onClose()}} />
    <FlatButton
      label="Submit"
      primary={true}
      onTouchTap={()=>{
        onAddFolder(fileExplorer,path.getValue(),folder.getValue())}} />
  </div>;

  return (
    <Dialog
      title={title}
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={()=>{onClose()}}>
      <div style={{paddingLeft:'30%', width:'100%'}}>
        <div>
          <TextField errorText={pathMessage} ref={node=> {path = node}} hintText='Enter path'/>
        </div>
        <div>
          <TextField errorText={folderMessage} ref={node=>{folderName = node}} hintText='Enter folder name'/>
        </div>
      </div>
    </Dialog>
  );
}
