import {expect} from 'chai';
import React from 'react'
import EditorReducer from 'src/stores/reducers/EditorReducer';
import deepFreeze from 'deep-freeze';
import EditorTab from 'src/components/EditorTab';
import File from 'src/components/File';
import Events from 'src/components/Events';
import Guid from 'util/Guid';


describe('SelectFileReducer tests', ()=>{
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

  it('should add tab to editor tabs when selected file event fired, that is not the defaultTab', ()=>{
    var tabCount = state.editor.tabs.length;
    deepFreeze(state);
    var newState = EditorReducer.reduce(state, {type:Events.fileSelectedEvent, file:{name:'foo', content:'bar', mode:'text'}});
    expect(newState.editor.tabs.length).to.equal(tabCount);
    expect(newState.editor.tabs[0].props.file.name == 'foo');
  });

  it('should add multiple tabs to editor for multiple file selected events', ()=>{
    var tabCount = state.editor.tabs.length;
    deepFreeze(state);
    var newState = EditorReducer.reduce(state, {type:Events.fileSelectedEvent, file:{name:'foo', content:'bar', mode:'text'}});
    expect(newState.editor.tabs.length).to.equal(tabCount);
    expect(newState.editor.tabs[0].props.file.name == 'foo');
  });

});
