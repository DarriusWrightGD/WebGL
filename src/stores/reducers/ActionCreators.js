import Events from 'src/components/Events';

module.exports = {
  openFileDialog:()=>{
    return {
      type:Events.openFileDialogEvent
    }
  },
  openFolderDialog:()=>{
    return {
      type: Events.openFolderDialogEvent
    }
  },
  fileTypeChanged: (selectedFileIndex)=>{
    return {
      type:Events.fileTypeChanged,
      selectedFileIndex
    }
  },
  closeFileDialog: ()=>{
    return {
      type:Events.closeFileDialogEvent
    }
  },
  closeFolderDialog: ()=>{
    return {
      type:Events.closeFolderDialogEvent
    }
  },
  createFile: (path, fileName, extension)=>{
    return {
      type: Events.createFileEvent,
      path,
      fileName,
      extension
    }
  },
  createFileError: (pathMessage,fileMessage)=>{
    return {
      type: Events.createFileErrorEvent,
      pathMessage,
      fileMessage
    }
  },
  createFolder: (path, folderName, extension)=>{
    return {
      type: Events.createFolderEvent,
      path,
      folderName,
      extension
    }
  },
  createFolderError: (pathMessage,folderMessage)=>{
    return {
      type: Events.createFolderErrorEvent,
      pathMessage,
      folderMessage
    }
  }
}
