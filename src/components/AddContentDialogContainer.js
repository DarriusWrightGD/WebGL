import React from 'react';
import {connect} from 'react-redux';
import AddContentDialog from './AddContentDialog';
import actions from 'src/stores/reducers/ActionCreators';
import pathValidator from 'src/stores/reducers/PathValidator';

const checkContent = (fileExplorer, path, contentName, contentValidator)=>{
  let pathMessage, contentMessage;
  try {
    pathValidator.validatePath(fileExplorer, path);
  } catch (e) {
    pathMessage = e.message;
  }

  if(!pathMessage){
    try {
      contentValidator(fileExplorer, path, contentName);
    } catch (e) {
      contentMessage = e.message;
    }
  }

  return {contentMessage,pathMessage};
}

const checkShaders = (fileExplorer, vertexShaderLocation, fragmentShaderLocation)=>{
  let vertexShaderMessage, fragmentShaderMessage;

  try{
    pathValidator.validateFileExists(fileExplorer,vertexShaderLocation);
  }catch(e){
    vertexShaderMessage = e.message;
  }

  if(!vertexShaderMessage){
    try{
      pathValidator.validateFileExists(fileExplorer,fragmentShaderMessage);
    }catch(e){
      fragmentShaderMessage = e.message;
    }
  }

  return {vertexShaderMessage,fragmentShaderMessage};
}


const mapStateToProps = (state)=>{
  return {
    ...state.editor.projectExplorer.addContentDialog,
    fileExplorer: state.editor.projectExplorer.fileExplorer
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    onCloseFileDialog: ()=>{
      dispatch(actions.closeFileDialog());
    },
    onCloseFolderDialog: ()=>{
      dispatch(actions.closeFolderDialog());
    },
    onCloseProgramDialog: ()=>{
      dispatch(actions.closeProgramDialog());
    },
    onFileSelect: (value)=>{
      dispatch(actions.fileTypeChanged(value));
    },
    onAddFile: (fileExplorer, path, fileName, extension)=>{
      let errors = checkContent(fileExplorer,path,fileName,pathValidator.validateFileDoesNotExist);

      if(errors.pathMessage || errors.contentMessage){
        dispatch(actions.createFileError(errors.pathMessage,errors.contentMessage));
      }else{
        dispatch(actions.createFile(path, fileName, extension));
        dispatch(actions.closeFileDialog());
      }
    },
    onAddFolder: (fileExplorer,path,folderName)=>{
      let errors = checkContent(fileExplorer,path,folderName,pathValidator.validateFolderDoesNotExist);

      if(errors.pathMessage || errors.contentMessage){
        dispatch(actions.createFolderError(errors.pathMessage,errors.contentMessage));
      }else{
        dispatch(actions.createFolder(path, folderName));
        dispatch(actions.closeFolderDialog());
      }
    },
    onAddProgram: (fileExplorer, programLocation,programName,vertexShaderLocation,fragmentShaderLocation)=>{
      console.log(gl);

      if(programName){
        programName += '.pg';
      }

      let locationErrors = checkContent(fileExplorer,programLocation,programName,pathValidator.validateFileDoesNotExist);
      let shaderErrors = checkShaders(fileExplorer,vertexShaderLocation,fragmentShaderLocation);

      if(locationErrors.pathMessage || locationErrors.contentMessage){
        dispatch(actions.createProgramLocationError(locationErrors.pathMessage,locationErrors.contentMessage));
      }else if(shaderErrors.vertexShaderMessage || shaderErrors.fragmentShaderMessage){
        dispatch(actions.createProgramShaderError(shaderErrors.vertexShaderMessage, shaderErrors.fragmentShaderMessage));
      }else{
        dispatch(actions.createProgram(programLocation, programName, vertexShaderLocation, fragmentShaderLocation));
        dispatch(actions.closeProgramDialog());
      }
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(AddContentDialog);
