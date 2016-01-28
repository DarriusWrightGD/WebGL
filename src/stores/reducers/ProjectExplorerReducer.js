import fileExplorer from './FileExplorerReducer';
import addContentDialog from './AddContentDialogReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  fileExplorer,
  addContentDialog
})
