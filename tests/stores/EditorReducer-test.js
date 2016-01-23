import React from 'react'
import EditorReducer from 'src/stores/reducers/EditorReducer';
import deepFreeze from 'deep-freeze';
import {expect} from 'chai';
import EditorTab from 'src/components/EditorTab';
import Events from 'src/components/Events';
import Guid from 'util/Guid';

describe('EditorReducer Tests', function(){
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

  it('should return state for unknown event', ()=>{
    var newState = EditorReducer.reduce(state, {type:'fooEvent'});
    expect(newState).to.equal(state);
  });

})
