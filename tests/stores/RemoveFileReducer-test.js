import {expect} from 'chai';
import React from 'react';
import removeFile from 'src/stores/reducers/RemoveFileReducer';
import selectFile from 'src/stores/reducers/SelectFileReducer';
import Events from 'src/components/Events';
import Guid from 'util/Guid';

describe('RemoveFileReducer tests', ()=>{

  var state;
  var defaultTabGuid = Guid.generate();
  var defaultFile = { name:'StartCoding', mode:'text', content:'Select/create a file in the project explorer to get started'};
  var defaultTab = {id:defaultTabGuid, file:defaultFile}

  before(()=>{
    state = {
        tabs:[defaultTab],
        defaultTab: defaultTab
    };
  });

  it('should remove tab from editor when remove event fired', ()=>{
    var twoTabsState = selectFile(
      selectFile(state, {type:Events.fileSelectedEvent, file:{name:'foo', content:'bar', mode:'text'}}),
      {
        type:Events.fileSelectedEvent, file:{name:'foo2', content:'bar2', mode:'text'}
      }
    );

    var tabCount = twoTabsState.tabs.length;
    var tabId = twoTabsState.tabs[tabCount-1].id;

    var removedTabState = removeFile(twoTabsState,{type:Events.removeFileEvent, guid:tabId});
    expect(removedTabState.tabs.length).to.equal(tabCount-1);
  });
});
