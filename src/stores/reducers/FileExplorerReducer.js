import Events from 'src/components/Events';
import folderClicked from './FolderClickedReducer';

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

export default function(state = initialState, action){
  switch(action.type){
    case Events.folderClickedEvent:
      return folderClicked(state,action);
    break;
    default:
      return state;
  }
}
