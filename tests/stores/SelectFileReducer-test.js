import {expect} from 'chai';
import React from 'react'
import selectFile from 'src/stores/reducers/SelectFileReducer';
import File from 'src/components/File';
import Events from 'src/components/Events';
import Guid from 'util/Guid';


describe('SelectFileReducer', ()=>{
  var state;
  var defaultTabGuid = Guid.generate();
  var defaultFile = { name:'StartCoding', mode:'text', content:'Select/create a file in the project explorer to get started'};
  var defaultTab =  {file:defaultFile, id: defaultTabGuid};

  before(()=>{
    state = {
        tabs:[defaultTab],
        defaultTab: defaultTab
    };
  });

  it('should add tab to editor tabs when selected file event fired, that is not the defaultTab', ()=>{
    var tabCount = state.tabs.length;
    var newState = selectFile(state, {type:Events.fileSelectedEvent, file:{name:'foo', content:'bar', mode:'text'}});

    expect(newState.tabs.length).to.equal(tabCount);
    expect(newState.tabs[0].file.name == 'foo');
  });

  it('should add multiple tabs to editor for multiple file selected events', ()=>{
    var tabCount = state.tabs.length;
    var newState = selectFile(state, {type:Events.fileSelectedEvent, file:{name:'foo', content:'bar', mode:'text'}});
    expect(newState.tabs.length).to.equal(tabCount);
    expect(newState.tabs[0].file.name === 'foo').to.be.true;
  });

});
