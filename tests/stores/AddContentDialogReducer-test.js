import {expect} from 'chai';
import addContentDialog from 'src/stores/reducers/AddContentDialogReducer';
import Events from 'src/components/Events';
import {createStore} from 'redux';

describe('AddContentDialogReducer', ()=>{
  var state;
  var errors;

  before(()=>{
    state= {
      fileDialog: {
        open:false,
        selectedFileIndex:1
      },
      folderDialog:{
        open:false
      },
      programDialog:{
        open:false
      }
    }
    errors = {path:'There\'s a foo path error', file:'There\'s a bar file error'};
  });

  it('should set the state by default correctly', ()=>{
    var reducedState = addContentDialog(state,{});
    expect(reducedState).to.deep.equal(state);
  });
});
