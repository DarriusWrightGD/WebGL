import fileExplorer from './FileExplorerReducer';
import addFileDialog from './AddFileDialogReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  fileExplorer,
  addFileDialog
})
