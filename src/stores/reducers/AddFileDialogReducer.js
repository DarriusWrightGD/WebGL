import Events from 'src/components/Events';

var initialState = {
  open:false,
  title:'Add a file',
  selectedFileIndex:1,
  fileTypes:[{name:'JavaScript', extension:'.js'}, {name:'GLSL', extension:'.glsl'}],
  extension:'.js'
}

export default (state = initialState, action)=>{
  debugger;
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
      open:false,
      pathMessage:undefined,
      fileMessage:undefined
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
