import FileExplorerReducer from './FileExplorerReducer';
import AddFileDialogReducer from './AddFileDialogReducer';
var initialState = {

};
module.exports = {
  reduce: function(state = initialState, action){
    return {
      fileExplorer: FileExplorerReducer.reduce(state.fileExplorer,action),
      addFileDialog: AddFileDialogReducer.reduce(state.addFileDialog,action)
    }
  }
}
