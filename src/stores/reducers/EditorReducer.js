import SelectFileReducer from './SelectFileReducer';
import RemoveFileReducer from './RemoveFileReducer';
import FolderClickedReducer from './FolderClickedReducer';
import Events from 'components/Events';

module.exports = {
  reduce : function(state, action){
    switch (action.type) {
      case Events.fileSelectedEvent:
        return SelectFileReducer.reduce(state,action);
        break;
      case Events.removeFileEvent:
        return RemoveFileReducer.reduce(state,action);
        break;
      case Events.folderClickedEvent:
        return FolderClickedReducer.reduce(state,action);
      default:
      return state;
    }
  }
}
