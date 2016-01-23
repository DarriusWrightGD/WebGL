module.exports = {
  reduce: function(state,action){
    var newState = {
      ...state
    }
    //newState.editor.errorLog.messages.push(action.message);
    return newState;
  }
}
