import Events from 'src/components/Events';

var initialState = {
  open:false,
  title:'Add a folder'
}

export default (state = initialState, action)=>{
  switch(action.type){
  case Events.openFolderDialogEvent:
    return {
        ...state,
        open:true
      }
      break;
    case Events.closeFolderDialogEvent:
        return {
          ...state,
          open:false,
          pathMessage:undefined,
          folderMessage:undefined
        }
        break;
    case Events.createFolderErrorEvent:
      return {
        ...state,
        pathMessage: action.pathMessage,
        folderMessage: action.folderMessage
      }
      break;
    default:
    return state;
  }
}
