import SelectFileReducer from './SelectFileReducer';
import RemoveFileReducer from './RemoveFileReducer';
import Events from 'src/components/Events';
import React from 'react';
import EditorTab from 'src/components/EditorTab';
import Guid from 'src/util/Guid';
import RemoveIcon from 'material-ui/lib/svg-icons/content/clear';
import style from 'src/style/MainStyle';

var defaultTabGuid = Guid.generate();
var defaultFile = { name:'StartCoding', mode:'text', content:'Select/create a file in the project explorer to get started'};
var defaultTab = <EditorTab value={defaultTabGuid} file={defaultFile} label={
  <span>{defaultFile.name}</span>
}/>;

var initialState = {
  tabs: [defaultTab],
  defaultTab: defaultTab,
  currentTab: defaultTabGuid
};

module.exports = {
  reduce : function(state = initialState, action){
    switch (action.type) {
      case Events.fileSelectedEvent:
        return SelectFileReducer.reduce(state,action);
        break;
      case Events.removeFileEvent:
        return RemoveFileReducer.reduce(state,action);
        break;
      default:
        return state;
    }
  }
}
