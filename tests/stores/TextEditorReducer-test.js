import {expect} from 'chai';
import React from 'react'
import textEditor from 'src/stores/reducers/TextEditorReducer';
import EditorTab from 'src/components/EditorTab';
import File from 'src/components/File';
import Events from 'src/components/Events';
import Guid from 'util/Guid';

describe('TextEditorReducer test', ()=>{
  var state;
  var defaultTabGuid = Guid.generate();
  var defaultFile = { name:'StartCoding', mode:'text', content:'Select/create a file in the project explorer to get started'};
  var defaultTab = <EditorTab value={defaultTabGuid} file={defaultFile} label={
    <span>{defaultFile.name}</span>
  }/>;

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
    var removedTabState = textEditor(state,{type:Events.removeFileEvent, guid:state.defaultTab.props.value});
    expect(removedTabState).to.deep.equal(state);
  });
});
