import pathValidator from './PathValidator';

export default function(state, action){
  var newState = _.cloneDeep(state);
  var currentFolder = pathValidator.getFolderAtPath(newState,action.path);
  currentFolder.open = !currentFolder.open;
  return newState;
}
