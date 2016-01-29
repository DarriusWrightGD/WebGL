import Events from 'src/components/Events';
import folderClicked from './FolderClickedReducer';
import cloner from 'cloner';
import pathValidator from './PathValidator';

var initialState = {
  name:'ShaderApp',
  open:true,
  folders:[{
    open: true,
    name:'Assets',
    folders:[{
      open:true,
      name:'Shaders',
      files:[{
        name:'vertex.glsl',
        mode:'glsl',
        content:'void main(){}'
      },
      {
        name:'fragment.glsl',
        mode:'glsl',
        content:'void main(){}'
      }]
    }],
    files:[{
      name:'render.js',
      mode:'javascript',
      content:'function(){console.log(\'something\')}'
    },
    {
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
  var newState = cloner.deep.copy(state);
  let currentFolder = pathValidator.getFolderAtPath(newState, action.path);
  currentFolder.files.push({name:action.fileName, content:'', mode:determineMode(action.extension)});

  return newState;
};

function createFolder(state, action){
  var newState = cloner.deep.copy(state);
  let currentFolder = pathValidator.getFolderAtPath(newState, action.path);
  currentFolder.folders.push({name:action.folderName, files:[], folders:[]});

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
    default:
      return state;
  }
}
