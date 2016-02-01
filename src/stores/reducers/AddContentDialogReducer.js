import fileDialog from './AddFileDialogReducer';
import folderDialog from './AddFolderDialogReducer';
import programDialog from './AddProgramDialogReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    fileDialog,
    folderDialog,
    programDialog
})
