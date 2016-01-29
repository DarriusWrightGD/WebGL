import selectFile from './SelectFileReducer';
import removeFile from './RemoveFileReducer';
import Events from 'src/components/Events';
import Guid from 'src/util/Guid';
import style from 'src/style/MainStyle';

var defaultTabGuid = Guid.generate();
var defaultFile = { name:'Start Coding', mode:'text', content:'Select/create a file in the project explorer to get started'};
var defaultTab = {file:defaultFile,id:defaultTabGuid};

var initialState = {
  tabs: [defaultTab],
  defaultTab: defaultTab,
  currentTab: defaultTabGuid
};

export default function(state = initialState, action){
  switch (action.type) {
    case Events.fileSelectedEvent:
      return selectFile(state,action);
      break;
    case Events.removeFileEvent:
      return removeFile(state,action);
      break;
    case Events.updateFileContentEvent:
      var newState = _.cloneDeep(state);
      var file = _.find(newState.tabs, (tab)=>{
        if(tab.file.name === action.name){
          return tab;
        }
      }).file;

      file.content = action.content;
      return newState;
      break;
    default:
      return state;
  }
}
