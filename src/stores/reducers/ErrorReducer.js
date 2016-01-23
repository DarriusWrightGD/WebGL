import cloner from 'cloner';
module.exports = {
  reduce: function(state,action){
    var newState = cloner.deep.copy(state);
    newState.editor.errorLog.messages.push(action.message);
    return newState;
  }
}
