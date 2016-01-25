function traverseFolderStructure(folderStructure, path){
  var folderNames = path.split('/');

  for(let i = 0; i < folderNames.length-1;i++){
    if(folderStructure.name === folderNames[i]){
      folderStructure = _.find(folderStructure.folders, (folder)=>{
        return folder.name === folderNames[i+1];
      })
    }else{
      throw new Error(`The path ${path} does not exist`);
    }
  }
  return folderStructure;
}

function validateFolderContentDoesNotExist(items, name){
  var foundItems = _.find(items,(item)=>{
    if(item.name === name){
      return item;
    }
  });

  if(foundItems){
    throw new Error(`The content ${name} already exists`);
  }
}

module.exports = {
  validatePath: (folderStructure, path)=>{
    traverseFolderStructure(folderStructure,path);
  },
  validateFile: (folderStructure,path,fileName)=>{
    var currentFolder = traverseFolderStructure(folderStructure,path);
    validateFolderContentDoesNotExist(currentFolder.files,fileName);
  },
  validateFolder: (folderStructure,path,folderName)=>{
    var currentFolder = traverseFolderStructure(folderStructure,path);
    validateFolderContentDoesNotExist(currentFolder.folders,folderName);
  }
}
