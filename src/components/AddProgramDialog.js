import React from 'react';
import DialogActions from './DialogActions';
import mui from 'material-ui';
import style from 'style/MainStyle';

var {Dialog, TextField} = mui;
export default ({pathMessage,fileMessage,
  vertexShaderMessage,fragmentShaderMessage,
  onClose,onAddProgram, fileExplorer,
  open,title})=>{

  let programLocation, programName, vertexShaderLocation, fragmentShaderLocation;

  return(
    <Dialog
      title={title}
      actions={<DialogActions
        onClose={onClose}
        onSubmit={()=>{
          onAddProgram(fileExplorer,programLocation.getValue(),
          programName.getValue(),vertexShaderLocation.getValue(),
          fragmentShaderLocation.getValue());
        }}/>}
      modal={false}
      open={open}
      onRequestClose={()=>{onClose()}}
      >
      <div style={style.dialogForm}>
        <div>
          <TextField errorText={pathMessage} ref={node=> {programLocation = node}} hintText='Enter program save location'/>
        </div>
        <div>
          <TextField errorText={fileMessage} ref={node=> {programName = node}} hintText='Enter program name'/>
        </div>
        <div>
          <TextField errorText={vertexShaderMessage} ref={node=> {vertexShaderLocation = node}} hintText='Enter vertex shader location'/>
        </div>
        <div>
          <TextField errorText={fragmentShaderMessage} ref={node=> {fragmentShaderLocation = node}} hintText='Enter fragment shader location'/>
        </div>
      </div>

    </Dialog>
  );
}
