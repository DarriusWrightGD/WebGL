import {expect} from 'chai';
import React from 'react'
import textEditor from 'src/stores/reducers/TextEditorReducer';
import File from 'src/components/File';
import Events from 'src/components/Events';
import Guid from 'util/Guid';

describe('TextEditorReducer test', ()=>{
  var state;
  var defaultTabGuid = Guid.generate();
  var defaultFile = { name:'StartCoding', mode:'text', content:'Select/create a file in the project explorer to get started'};
  var defaultTab =  {file:defaultFile, id: defaultTabGuid};

  before(()=>{
    state = {
        tabs:[defaultTab],
        defaultTab: defaultTab,
        currentTab:defaultTabGuid
    };
  });

  it('should change state if select tab event is fired', ()=>{
    var newState = textEditor(state, {type:Events.fileSelectedEvent, file:{name:'foo', content:'bar', mode:'text'}});
    expect(newState).to.not.deep.equal(state);
  });

  it('should not change state if remove tab event is fired, because of defaultTab', ()=>{
    var removedTabState = textEditor(state,{type:Events.removeFileEvent, guid:state.defaultTab.id});
    expect(removedTabState).to.deep.equal(state);
  });
});
