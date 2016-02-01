import React from 'react';
import AddFileButton from './AddFileButton';
import AddFolderButton from './AddFolderButton';
import AddProgramButton from './AddProgramButton';

export default ({onFileDialogClick, onFolderDialogClick, onProgramDialogClick})=>{
  return (<div>
    <AddFileButton onClick={onFileDialogClick}/>
    <AddFolderButton onClick={onFolderDialogClick}/>
    <AddProgramButton onClick={onProgramDialogClick}/>
  </div>);
}
