import React from 'react';
import {connect} from 'react-redux';
import AddContentDialog from './AddContentDialog';
import actions from 'src/stores/reducers/ActionCreators';
import pathValidator from 'src/stores/reducers/PathValidator';

const addContent = (fileExplorer, path, contentName,validator)=>{
  let pathMessage;
  try {
    pathValidator.validatePath(fileExplorer, path);
  } catch (e) {
    contentMessage = e.message;
  }

  let contentMessage;
  try {
    validator(fileExplorer, path, contentName);
  } catch (e) {
    contentMessage = e.message;
  }

  return {contentMessage,pathMessage};
}


const mapStateToProps = (state)=>{
  return {
    ...state.editor.projectExplorer.addContentDialog,
    fileExplorer: state.editor.projectExplorer.fileExplorer
  }
};

const mapDispatchToProps = (dipatch)=>{
  return {
    onCloseFileDialog: ()=>{
      dispatch(actions.closeFileDialog());
    },
    onCloseFolderDialog: ()=>{
      dispatch(actions.closeFolderDialog());
    },
    onFileSelect: (value)=>{
      dispatch(actions.fileTypeChanged(value));
    },
    onAddFile: (fileExplorer, path, fileName, extension)=>{
      let errors = addContentValidate(fileExplorer,path,fileName,pathValidator.validateFile);

      if(errors.pathMessage || errors.contentMessage){
        dispatch(actions.createFileError(errors.pathMessage,errors.contentMessage));
      }else{
        dispatch(actions.createFile(path, fileName, extension));
        dispatch(actions.closeFileDialog());
      }
    },
    onAddFolder: (fileExplorer,path,folderName)=>{
      let errors = addContentValidate(fileExplorer,path,folderName,pathValidator.validateFolder);

      if(errors.pathMessage || errors.contentMessage){
        dispatch(actions.createFolderError(errors.pathMessage,errors.contentMessage));
      }else{
        dispatch(actions.createFolder(path, folderName));
        dispatch(actions.closeFolderDialog());
      }
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(AddContentDialog);
