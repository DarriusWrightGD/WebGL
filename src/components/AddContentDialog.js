import React from 'react';
import AddFileDialog from './AddFileDialog';
import AddFolderDialog from './AddFolderDialog';
import AddProgramDialog from './AddProgramDialog';

export default ({fileDialog,folderDialog,programDialog,
  fileExplorer,onAddFolder,onAddFile, onAddProgram,
  onCloseProgramDialog, onCloseFolderDialog, onCloseFileDialog})=>{
  return(
    <div>
      <AddFileDialog {...fileDialog} onAddFile={onAddFile} onClose={onCloseFileDialog} fileExplorer={fileExplorer}/>
      <AddFolderDialog {...folderDialog} onAddFolder={onAddFolder} onClose={onCloseFolderDialog} fileExplorer={fileExplorer}/>
      <AddProgramDialog {...programDialog} onAddProgram={onAddProgram} onClose={onCloseProgramDialog} fileExplorer={fileExplorer}/>
    </div>
  );
}
