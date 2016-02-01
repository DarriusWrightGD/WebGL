import _ from 'lodash';
import Guid from 'util/Guid';

function addTab(state, action){
  var file = action.file;
  var tab = _.find(state.tabs, function(t){ return t.file.name == file.name && t.file.path == file.path});
  if(!tab)
  {
    var guid = Guid.generate();

    var newTabs = _.filter(state.tabs,(t)=>state.defaultTab.id !== t.id);
    return {
      ...state,
      tabs:[...newTabs, {file:file, id:guid}],
      currentTab:guid
    }
  }else{
    return {
      ...state,
      currentTab: tab.id
    }
  }
}


export default function(state, action){
  return addTab(state,action);
}
