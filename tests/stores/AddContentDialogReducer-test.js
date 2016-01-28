import {expect} from 'chai';
import addContentDialog from 'src/stores/reducers/AddContentDialogReducer';
import Events from 'src/components/Events';
import {createStore} from 'redux';

describe('AddContentDialogReducer test', ()=>{
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
      }
    }
    errors = {path:'There\'s a foo path error', file:'There\'s a bar file error'};
  });

});
