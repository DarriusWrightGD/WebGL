import React from 'react';
import mui from 'material-ui';
import Events from './Events';
import DialogActions from './DialogActions';
import style from 'style/MainStyle';

var {IconButton, FlatButton, Dialog, TextField, MenuItem, SelectField} = mui;

export default ({title, fileTypes,open ,
  fileExplorer, selectedFileIndex,
  onClose, onFileSelect, onAddFile,
  pathMessage, fileMessage
  })=>{
  let fileName;
  let path;

  const actions = <DialogActions
    onClose={onClose}
    onSubmit={()=>{
      var extension = fileTypes[selectedFileIndex-1].extension;
      onAddFile(fileExplorer,path.getValue(),fileName.getValue()+extension,extension)}}/>

  const items = fileTypes.map((fileType,index)=>{
    return <MenuItem value={index+1} key={index+1} primaryText={fileType.name} label={fileType.extension}/>
  });

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
          <TextField errorText={fileMessage} ref={node=>{fileName = node}} hintText='Enter file name'/>
        </div>
        <div>
          <SelectField value={selectedFileIndex} onChange={(event,index,value)=>{onFileSelect(value)}} >
            {items}
          </SelectField>
        </div>
      </div>
    </Dialog>
  );
}
