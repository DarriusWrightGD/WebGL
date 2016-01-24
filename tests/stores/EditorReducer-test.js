import React from 'react'
import EditorReducer from 'src/stores/reducers/EditorReducer';
import {expect} from 'chai';
import EditorTab from 'src/components/EditorTab';
import Events from 'src/components/Events';
import Guid from 'util/Guid';

describe('EditorReducer Tests', function(){
  var state;
  before(()=>{
    state = {
      projectExplorer:{
        fileExplorer:{
          folders:[],
          files:[]
        },
        addFileDialog:{
          open:false
        }
      },
      textEditor:{
        tabs:[<EditorTab/>],
        defaultTab:<EditorTab/>,
        currentTabId:'fooId'
      },
      errorLog:{
        messages:['fooError']
      }
    }
  });

  it('should set up error state correctly if initialstate populates it', ()=>{
    var reducedState = EditorReducer.reduce(state,{});
    expect(reducedState.errorLog).to.deep.equal(state.errorLog);
  })

  it('should set up the text editor correctly if initialstate populates it',()=>{
    var reducedState = EditorReducer.reduce(state,{});
    expect(reducedState.textEditor).to.deep.equal(state.textEditor);
  })

  it('should set up the project explorer if initialstate populates it', ()=>{
    var reducedState = EditorReducer.reduce(state,{});
    expect(reducedState.projectExplorer).to.deep.equal(state.projectExplorer);
  });

})
