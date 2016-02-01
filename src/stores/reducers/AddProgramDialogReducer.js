import Events from 'src/components/Events';

var initialState={
  open:false,
  title:'Add Program'
}

export default (state = initialState,action)=>{
  switch(action.type){
    case Events.createProgramLocationErrorEvent:
      return {
        ...state,
        pathMessage: action.pathMessage,
        fileMessage: action.fileMessage
      }
    break;
    case Events.createProgramShaderErrorEvent:
      return {
        ...state,
        vertexShaderMessage: action.vertexShaderMessage,
        fragmentShaderMessage: action.fragmentShaderMessage
      }
    break;
    case Events.closeProgramDialogEvent:
      return {
        ...state,
        open:false
      }
    break;
    case Events.openProgramDialogEvent:
      return {
        ...state,
        open:true
      }
    break;
    default:
      return state;
  }
}
