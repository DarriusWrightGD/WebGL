import React from 'react';
import AddFileButton from './AddFileButton';
import AddFolderButton from './AddFolderButton';

export default ({onFileDialogClick, onFolderDialogClick})=>{
  return (<div>
    <AddFileButton onClick={onFileDialogClick}/>
    <AddFolderButton onClick={onFolderDialogClick}/>
  </div>);
}
