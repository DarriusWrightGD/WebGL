import Events from 'src/components/Events';

module.exports = {
  openFileDialog:()=>{
    return {
      type:Events.openFileDialogEvent
    };
  },
  openFolderDialog:()=>{
    return {
      type: Events.openFolderDialogEvent
    };
  },
  openProgramDialog:()=>{
    return {
      type: Events.openProgramDialogEvent
    };
  },
  fileTypeChanged: (selectedFileIndex)=>{
    return {
      type:Events.fileTypeChanged,
      selectedFileIndex
    }
  },
  selectFile: (file)=>{
    return {
      type:Events.fileSelectedEvent,
      file
    }
  },
  removeFile: (guid)=>{
    return {
      type:Events.removeFileEvent,
      guid
    }
  },
  updateFileContent: (content,path,name)=>{
    return {
      type: Events.updateFileContentEvent,
      content,
      path,
      name
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
  },
  createProgramLocationError: (pathMessage, fileMessage)=>{
    return {
      type: Events.createProgramLocationErrorEvent,
      pathMessage,
      fileMessage
    }
  },
  createProgramShaderError: (vertexShaderMessage, fragmentShaderMessage)=>{
    return {
      type: Events.createProgramShaderErrorEvent,
      vertexShaderMessage,
      fragmentShaderMessage
    }
  },
  createProgram: (programLocation, programName, vertexShaderLocation, fragmentShaderLocation)=>{
    return {
      type: Events.createProgramEvent,
      programLocation,
      programName,
      vertexShaderLocation,
      fragmentShaderLocation
    }
  },
  closeProgramDialog:()=>{
    return {
      type: Events.closeProgramDialogEvent
    }
  }
}
