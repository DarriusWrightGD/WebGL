import {expect} from 'chai';
import React from 'react'
import EditorReducer from 'src/stores/reducers/EditorReducer';
import deepFreeze from 'deep-freeze';
import EditorTab from 'src/components/EditorTab';
import Events from 'src/components/Events';
import Guid from 'util/Guid';

describe('RemoveFileReducer tests', ()=>{

  var state;
  var defaultTabGuid = Guid.generate();
  var defaultFile = { name:'StartCoding', mode:'text', content:'Select/create a file in the project explorer to get started'};
  var defaultTab = <EditorTab value={defaultTabGuid} file={defaultFile} label={
    <span>{defaultFile.name}</span>
  }/>;
  before(()=>{
    state = {
      editor:{
        tabs:[defaultTab],
        defaultTab: defaultTab
      }
    };
  });

  it('should remove tab from editor when remove event fired', ()=>{
    var twoTabsState = EditorReducer.reduce(
      EditorReducer.reduce(state, {type:Events.fileSelectedEvent, file:{name:'foo', content:'bar', mode:'text'}}),
      {
        type:Events.fileSelectedEvent, file:{name:'foo2', content:'bar2', mode:'text'}
      }
    );

    var tabCount = twoTabsState.editor.tabs.length;
    var tabId = twoTabsState.editor.tabs[tabCount-1].props.value;

    deepFreeze(twoTabsState);
    var removedTabState = EditorReducer.reduce(twoTabsState,{type:Events.removeFileEvent, guid:tabId});
    expect(removedTabState.editor.tabs.length).to.equal(tabCount-1);
  });
});
