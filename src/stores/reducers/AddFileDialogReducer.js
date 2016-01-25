import Events from 'src/components/Events';

var initialState = {
  open:false,
  fileTypes:[{name:'JavaScript', extension:'.js'}, {name:'GLSL', extension:'.glsl'}],
  value:1,
  extension:'.js'
}

export default function(state = initialState, action = {}){
  switch(action.type){
    case Events.openFileDialogEvent:
      return {
        ...state,
        open:true
      }
      break;
    case Events.closeFileDialogEvent:
      return {
        ...state,
        open:false
      }
      break;
    default:
    return state;
  }
}
