import {expect} from 'chai';
import React from 'react'
import textEditor from 'src/stores/reducers/TextEditorReducer';
import File from 'src/components/File';
import Events from 'src/components/Events';
import Guid from 'util/Guid';

describe('TextEditorReducer', ()=>{
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
    var selectedFile = {name:'foo', content:'bar', mode:'text'}
    var newState = textEditor(state, {type:Events.fileSelectedEvent, file:selectedFile});
    expect(newState).to.not.deep.equal(state);
    expect(_.find(newState.tabs, (t)=>t.file.name === selectedFile.name).file).to.be.ok;
  });

  it('should not change state if remove tab event is fired, because of defaultTab', ()=>{
    var removedTabState = textEditor(state,{type:Events.removeFileEvent, guid:state.defaultTab.id});
    expect(removedTabState).to.deep.equal(state);
  });

  it('should update file content when file update is fired for a tab that contains the file', ()=>{
    var newContent = 'Change Content';
    var selectedFile = {content:'this is the content', name:'foo'}
    var selectedState = textEditor(state, {type:Events.fileSelectedEvent, file:selectedFile});
    var reducedState = textEditor(selectedState, {type:Events.updateFileContentEvent, content:newContent, name:'foo' });
    var file = _.find(reducedState.tabs, (t)=>t.file.name === selectedFile.name).file;
    expect(file.content).to.equal(newContent);
  })
});
