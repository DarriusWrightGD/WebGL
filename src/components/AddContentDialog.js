import React from 'react';
import AddFileDialog from './AddFileDialog';
import AddFolderDialog from './AddFolderDialog';

export default ({fileDialog,folderDialog,fileExplorer,onAddFolder,onAddFile, onCloseFolderDialog, onCloseFileDialog})=>{
  return(
    <div>
      <AddFileDialog {...fileDialog} onAddFile={onAddFile} onClose={onCloseFileDialog} fileExplorer={fileExplorer}/>
      <AddFolderDialog {...folderDialog} onAddFolder={onAddFolder} onClose={onCloseFolderDialog} fileExplorer={fileExplorer}/>
    </div>
  );
}
