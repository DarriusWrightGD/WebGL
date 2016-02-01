function traverseFolderStructure(folderStructure, path){
  var folderNames = path.split('/');
  var validPath = folderStructure.name == folderNames[0];

  for(let i = 0; i < folderNames.length-1 && validPath;i++){
    if(folderStructure.name === folderNames[i]){
      folderStructure = _.find(folderStructure.folders, (folder)=>folder.name === folderNames[i+1]);
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
  var foundItems = _.find(items,(item)=>item.name === name);

  if(foundItems){
    throw new Error(`The content ${name} already exists`);
  }
}

function checkContentName(contentName){
  if(!contentName){
    throw new Error(`The content\'s name (${contentName}) is not valid`);
  }
}

function checkContentPath(path){
  if(!path){
    throw new Error('Must enter a valid path.');
  }
}

module.exports = {
  validatePath: (folderStructure, path)=>{
    traverseFolderStructure(folderStructure,path);
  },
  validateFileDoesNotExist: (folderStructure,path,fileName)=>{
    checkContentName(fileName);
    var currentFolder = traverseFolderStructure(folderStructure,path);
    validateFolderContentDoesNotExist(currentFolder.files,fileName);
  },
  validateFolderDoesNotExist: (folderStructure,path,folderName)=>{
    checkContentName(folderName);
    var currentFolder = traverseFolderStructure(folderStructure,path);
    validateFolderContentDoesNotExist(currentFolder.folders,folderName);
  },
  validateFileExists: (folderStructure, path)=>{
    checkContentPath(path);
    var endOfPath = path.lastIndexOf('/');
    var fileName = path.substring(endOfPath+1);
    var fileLocation = path.substring(0,endOfPath);
    var currentFolder = traverseFolderStructure(folderStructure, fileLocation );
    var file = _.find(currentFolder.files, (f)=> f.name === fileName);
    if(!file){
      throw new Error(`The file ${fileName} does not exist in ${fileLocation}`);
    }
  },
  getFolderAtPath: traverseFolderStructure
}
