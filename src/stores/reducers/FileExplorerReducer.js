import Events from 'src/components/Events';
import folderClicked from './FolderClickedReducer';
import pathValidator from './PathValidator';

var initialState = {
  name:'ShaderApp',
  path:'',
  open:true,
  folders:[],
  files:[]
};

function determineMode(extension){
  switch(extension){
    case '.js':
    return 'javascript'
    break;
  }
}

function createFile(state, action){
  var newState = _.cloneDeep(state);
  let currentFolder = pathValidator.getFolderAtPath(newState, action.path);
  currentFolder.files.push({name:action.fileName, path:action.path, content:'', mode:determineMode(action.extension)});

  return newState;
};

function createFolder(state, action){
  var newState = _.cloneDeep(state);
  let currentFolder = pathValidator.getFolderAtPath(newState, action.path);
  currentFolder.folders.push({name:action.folderName,path:action.path, files:[], folders:[]});

  return newState;
}

function updateFileContent(state, action){
  var newState = _.cloneDeep(state);
  let currentFolder = pathValidator.getFolderAtPath(newState, action.path);
  let file = _.find(currentFolder.files,(f)=>f.name === action.name);
  file.content = action.content;
  return newState;
}

function createProgram(state,action){
  var newState = _.cloneDeep(state);
  let currentFolder = pathValidator.getFolderAtPath(newState, action.program.path);
  currentFolder.programs.push(action.program);
  return newState;
}

export default function(state = initialState, action){
  switch(action.type){
    case Events.folderClickedEvent:
      return folderClicked(state,action);
    break;
    case Events.createFileEvent:
      return createFile(state,action);
    break;
    case Events.createFolderEvent:
      return createFolder(state,action);
    break;
    case Events.createProgramEvent:
      return createProgram(state,action);
    break;
    case Events.updateFileContentEvent:
      return updateFileContent(state,action);
    break;
    default:
      return state;
  }
}
