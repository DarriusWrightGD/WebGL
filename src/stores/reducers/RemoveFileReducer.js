import _ from 'lodash';
import React from 'react';
import style from 'style/MainStyle';

export default function(state,action){
  var guid = action.guid;
  var filteredTabs = _.filter(state.tabs,(tab)=>{
    if(tab.id != guid)
    {
      return tab;
    }
  });

  if(filteredTabs.length > 0){
    return {
      ...state,
      tabs: filteredTabs,
      currentTab: filteredTabs[0].id
    }
  }else{
    return {
      ...state,
      tabs: [state.defaultTab],
      currentTab: state.defaultTab.id
    }
  }
}
