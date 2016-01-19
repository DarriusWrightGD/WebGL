
import _ from 'lodash';
import React from 'react';
import Guid from '../../util/Guid';
import EditorTab from '../../components/EditorTab';
import RemoveTab from '../../components/RemoveTab';

function removeDefaultTab(state){

}

function addTab(state, action){
  var file = action.file;
  var tab = _.find(state.editor.tabs, function(t){ return t.key == file.name});
  if(!tab)
  {
    var guid = Guid.generate();

    var newTabs = _.filter(state.editor.tabs,(t)=>{
      if(state.editor.defaultTab.props.value !== t.props.value ){
        return t;
      }
    })
    return {
      ...state,
      editor:{
        ...state.editor,
        tabs:[...newTabs, <EditorTab value={guid} key={file.name} file={file} label={<span>{file.name}
              <RemoveTab tabGuid = {guid}/>
        </span>} />],
        currentTab:guid
      },
    }
  }else{
    return {
      ...state,
      editor:{
        ...state.editor,
        currentTab: tab.props.value
      }
    }
  }
}


module.exports = {
  handle : function(state, action){
    return addTab(state,action);
  }
}
