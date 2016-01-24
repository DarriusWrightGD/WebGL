
import _ from 'lodash';
import React from 'react';
import Guid from 'util/Guid';
import EditorTab from 'components/EditorTab';
import RemoveTab from 'components/RemoveTab';

function addTab(state, action){
  var file = action.file;
  var tab = _.find(state.tabs, function(t){ return t.key == file.name});
  if(!tab)
  {
    var guid = Guid.generate();

    var newTabs = _.filter(state.tabs,(t)=>{
      if(state.defaultTab.props.value !== t.props.value ){
        return t;
      }
    })
    return {
      ...state,
      tabs:[...newTabs, <EditorTab value={guid} key={file.name} file={file} label={<span>{file.name}
        <RemoveTab tabGuid = {guid}/>
      </span>} />],
      currentTab:guid
    }
  }else{
    return {
      ...state,
      currentTab: tab.props.value
    }
  }
}


export default function(state, action){
  return addTab(state,action);
}
