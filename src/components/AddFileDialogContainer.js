import {connect} from 'react-redux';
import React from 'react';
import Events from './Events';
import pathValidator from 'src/stores/reducers/PathValidator';
import AddFileDialog from './AddFileDialog';

const mapStateToProps = (state)=>{
  return {
    ...state.editor.projectExplorer.addFileDialog,
    title: "Add a file",
    fileExplorer: state.editor.projectExplorer.fileExplorer,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onFileSelect: (value)=>{
      dispatch({type:Events.fileTypeChangedEvent, selectedFileIndex:value});
    },
    onClose: ()=>{
      dispatch({type:Events.closeFileDialogEvent});
    },
    onAddFile: (fileExplorer, path, fileName, extension)=>{
      let pathMessage;
      try {
        pathValidator.validatePath(fileExplorer, path);
      } catch (e) {
        pathMessage = e.message;
      }

      let fileMessage;
      try {
        pathValidator.validateFile(fileExplorer, path, fileName);
      } catch (e) {
        fileMessage = e.message;
      }

      if(pathMessage || fileMessage){
        dispatch({type:Events.createFileErrorEvent, pathMessage:pathMessage, fileMessage: fileMessage});
      }else{
        dispatch({type:Events.createFileEvent,path:path, fileName: fileName, extension: extension});
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddFileDialog);
