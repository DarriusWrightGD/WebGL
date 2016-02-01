import React from 'react'
import editor from 'src/stores/reducers/EditorReducer';
import {expect} from 'chai';
import Events from 'src/components/Events';
import Guid from 'util/Guid';

describe('EditorReducer', function(){
  var state;
  before(()=>{
    state = {
      projectExplorer:{
        fileExplorer:{
          folders:[],
          files:[],
          programs:[]
        },
        addContentDialog:{
          fileDialog: {
            open:false
          },
          folderDialog:{
            open:false
          },
          programDialog:{
            open:false
          }
        }
      },
      textEditor:{
        tabs:[{name:'default' }],
        defaultTab:{name:'default'},
        currentTabId:'fooId'
      },
      errorLog:{
        messages:['fooError']
      }
    }
  });

  it('should set up error state correctly if initialstate populates it', ()=>{
    var reducedState = editor(state,{});
    expect(reducedState.errorLog).to.deep.equal(state.errorLog);
  })

  it('should set up the text editor correctly if initialstate populates it',()=>{
    var reducedState = editor(state,{});
    expect(reducedState.textEditor).to.deep.equal(state.textEditor);
  })

  it('should set up the project explorer if initialstate populates it', ()=>{
    var reducedState = editor(state,{});
    expect(reducedState.projectExplorer).to.deep.equal(state.projectExplorer);
  });

})
