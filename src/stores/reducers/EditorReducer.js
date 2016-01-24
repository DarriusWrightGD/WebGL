import projectExplorer from './ProjectExplorerReducer';
import errorLog from './ErrorReducer';
import textEditor from './TextEditorReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  projectExplorer,
  textEditor,
  errorLog
});
