import Events from 'src/components/Events';
import folderClicked from './FolderClickedReducer';
import cloner from 'cloner';

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

function create(state, action){
  var newState = cloner.deep.copy(state);
  var folderNames = action.path.split('/');
  var currentFolder = newState;

  for(let i = 0; i < folderNames.length-1;i++){
    if(currentFolder.name === folderNames[i]){
      currentFolder = _.find(currentFolder.folders, (folder)=>{
        return folder.name === folderNames[i+1];
      })
    }
  }
  currentFolder.files.push({name:action.fileName, content:'', mode:determineMode(action.extension)});
  return newState;
};

export default function(state = initialState, action){
  switch(action.type){
    case Events.folderClickedEvent:
      return folderClicked(state,action);
    break;
    case Events.createFileEvent:
      return create(state,action);

    break;
    default:
      return state;
  }
}
