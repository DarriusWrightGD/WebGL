import ProjectExplorerReducer from './ProjectExplorerReducer';
import ErrorReducer from './ErrorReducer';
import TextEditorReducer from './TextEditorReducer';

module.exports = {
  reduce : function(state, action){
    return {
      projectExplorer: ProjectExplorerReducer.reduce(state.projectExplorer,action),
      textEditor: TextEditorReducer.reduce(state.textEditor,action),
      errorLog: ErrorReducer.reduce(state.errorLog,action)
    }
  }
}
