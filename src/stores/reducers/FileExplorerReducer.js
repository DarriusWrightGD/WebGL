import Events from 'src/components/Events';
import folderClicked from './FolderClickedReducer';
import pathValidator from './PathValidator';

var initialState = {
  name:'ShaderApp',
  path:'',
  open:true,
  folders:[{
    path:'ShaderApp',
    open: true,
    name:'Assets',
    folders:[{
      path:'ShaderApp/Assets',
      open:true,
      name:'Shaders',
      files:[{
        path:'ShaderApp/Assets/Shaders',
        name:'vertex.glsl',
        mode:'glsl',
        content:'void main(){}'
      },
      {
        path:'ShaderApp/Assets/Shaders',
        name:'fragment.glsl',
        mode:'glsl',
        content:'void main(){}'
      }]
    }],
    files:[{
      path:'ShaderApp/Assets',
      name:'render.js',
      mode:'javascript',
      content:'function(){console.log(\'something\')}'
    },
    {
      path:'ShaderApp/Assets',
      name:'update.js',
      mode:'javascript',
      content:'function(){console.log(\'something\')}'
    }
  ]
  }],
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
  currentFolder.files.push({name:action.fileName, content:'', mode:determineMode(action.extension)});

  return newState;
};

function createFolder(state, action){
  var newState = _.cloneDeep(state);
  let currentFolder = pathValidator.getFolderAtPath(newState, action.path);
  currentFolder.folders.push({name:action.folderName, files:[], folders:[]});

  return newState;
}

function updateFileContent(state, action){
  var newState = _.cloneDeep(state);
  let currentFolder = pathValidator.getFolderAtPath(newState, action.path);
  let file = _.find(currentFolder.files,(f)=>{
    if(f.name === action.name)
      return f;
  });
  file.content = action.content;
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
    case Events.updateFileContentEvent:
      return updateFileContent(state,action);
    break;
    default:
      return state;
  }
}
