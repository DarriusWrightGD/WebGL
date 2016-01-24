import cloner from 'cloner';

module.exports = {
  reduce: function(state, action){
    var newState = cloner.deep.copy(state);
    var folderNames = action.path.split('/');
    var currentFolder = newState;

    for(let i = 0; i < folderNames.length-1;i++){
      if(currentFolder.name === folderNames[i]){
        currentFolder = _.find(currentFolder.folders, (folder)=>{
          return folder.name === folderNames[i+1];
        })
      }else{
        throw new Error(folderNames[i] + ', directory does not exist');
      }
    }

    currentFolder.open = !currentFolder.open;
    return newState;
  }
}
