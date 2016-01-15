import _ from 'lodash';


module.exports = {
  handle : function(state,guid){
    var filteredTabs = _.filter(state.tabs,(tab)=>{
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
        {
          ...state.editor,
          tabs: [state.editor.defaultTab],
          currentTab: state.editor.defaultTab.props.value
        }
      }
    }
  }
}
