import Events from 'src/components/Events';
import FolderClickedReducer from './FolderClickedReducer';

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

module.exports = {
  reduce: function(state = initialState, action){
    switch(action.type){
      case Events.folderClickedEvent:
        return FolderClickedReducer.reduce(state,action);
      break;
      default:
        return state;
    }
  }
}
