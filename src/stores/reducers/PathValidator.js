function traverseFolderStructure(folderStructure, path){
  var folderNames = path.split('/');
  var validPath = folderStructure.name == folderNames[0];

  for(let i = 0; i < folderNames.length-1 && validPath;i++){
    if(folderStructure.name === folderNames[i]){
      folderStructure = _.find(folderStructure.folders, (folder)=>{
        return folder.name === folderNames[i+1];
      })
    }else{
      validPath = false;
    }
  }

  if(!validPath || !folderStructure){
    throw new Error(`The path ${path} does not exist`);
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

function checkContentName(contentName){
  if(!contentName){
    throw new Error(`The content\'s name (${contentName}) is not valid`);
  }
}

module.exports = {
  validatePath: (folderStructure, path)=>{
    traverseFolderStructure(folderStructure,path);
  },
  validateFile: (folderStructure,path,fileName)=>{
    checkContentName(fileName);
    var currentFolder = traverseFolderStructure(folderStructure,path);
    validateFolderContentDoesNotExist(currentFolder.files,fileName);
  },
  validateFolder: (folderStructure,path,folderName)=>{
    checkContentName(folderName);
    var currentFolder = traverseFolderStructure(folderStructure,path);
    validateFolderContentDoesNotExist(currentFolder.folders,folderName);
  },
  getFolderAtPath: traverseFolderStructure
}
