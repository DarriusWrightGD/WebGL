import _ from 'lodash';
import React from 'react';
import style from 'style/MainStyle';

module.exports = {
  reduce : function(state,action){
    var guid = action.guid;
    var filteredTabs = _.filter(state.tabs,(tab)=>{
      if(tab.props.value != guid)
      {
        return tab;
      }
    });

    if(filteredTabs.length > 0){
      return {
        ...state,
        tabs: filteredTabs,
        currentTab: filteredTabs[0].props.value
      }
    }else{
      return {
        ...state,
        tabs: [state.defaultTab],
        currentTab: state.defaultTab.props.value
      }
    }
  }
}
