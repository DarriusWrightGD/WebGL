import _ from 'lodash';
import React from 'react';
import style from '../../style/MainStyle';

module.exports = {
  handle : function(state,action){
    var guid = action.guid;
    var filteredTabs = _.filter(state.editor.tabs,(tab)=>{
      if(tab.props.value != guid)
      {
        return tab;
      }
    });

    if(filteredTabs.length > 0){
      return {
        ...state,
        editor: {
          ...state.editor,
          tabs: filteredTabs,
          currentTab: filteredTabs[0].props.value
        }
      }
    }else{
      return {
        ...state,
        editor: {
          ...state.editor,
          tabs: [state.editor.defaultTab],
          currentTab: state.editor.defaultTab.props.value
        }
      }
    }
  }
}
