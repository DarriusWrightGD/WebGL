import EditorReducer from './reducers/EditorReducer';
var initialState = {
  editor:{
    
  }
};
module.exports = {
  shaderApp : function(state=initialState, action){
    return {
      editor: EditorReducer.reduce(state.editor, action)
    }
  }
}
