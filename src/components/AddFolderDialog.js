import React from 'react';
import DialogActions from './DialogActions';
import style from 'style/MainStyle';
import mui from 'material-ui';

var {Dialog, TextField} = mui;

export default ({title, open,
  fileExplorer,
  onClose, onAddFolder,
  pathMessage, folderMessage
  })=>{
  let folderName;
  let path;

  const actions = <DialogActions
    onClose={onClose}
    onSubmit={()=>{onAddFolder(fileExplorer,path.getValue(),folderName.getValue())}}/>

  return (
    <Dialog
      title={title}
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={()=>{onClose()}}>
      <div style={style.dialogForm}>
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
