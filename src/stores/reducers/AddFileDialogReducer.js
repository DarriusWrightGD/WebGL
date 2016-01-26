import Events from 'src/components/Events';

var initialState = {
  open:false,
  fileTypes:[{name:'JavaScript', extension:'.js'}, {name:'GLSL', extension:'.glsl'}],
  selectedFileIndex:1,
  extension:'.js'
}

export default function(state = initialState, action = {}){
  switch(action.type){
    case Events.openFileDialogEvent:
      return {
        ...state,
        open: true
      }
      break;
    case Events.closeFileDialogEvent:
      return {
        ...state,
        open: false
      }
      break;
    case Events.fileTypeChangedEvent:
      return {
        ...state,
        selectedFileIndex: action.selectedFileIndex
      }
      break;
    case Events.createFileErrorEvent:
      return {
        ...state,
        pathMessage: action.pathMessage,
        fileMessage: action.fileMessage
      }
      break;
    default:
    return state;
  }
}
