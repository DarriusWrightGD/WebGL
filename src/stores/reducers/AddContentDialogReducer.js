import fileDialog from './AddFileDialogReducer';
import folderDialog from './AddFolderDialogReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    fileDialog,
    folderDialog
})
