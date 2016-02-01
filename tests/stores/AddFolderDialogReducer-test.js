import {expect} from 'chai';
import folderDialog from 'src/stores/reducers/AddFolderDialogReducer';
import Events from 'src/components/Events';
import {createStore} from 'redux';

describe('AddFolderDialogReducer', ()=>{
  var state;
  var errors;

  before(()=>{
    state= {
      open:false
    };

    errors = {path:'There\'s a foo path error', file:'There\'s a bar file error'};
  });

  it('should open folder dialog when open folder dialog event fired', ()=>{
    var reducedState = folderDialog(state,{type:Events.openFolderDialogEvent});
    expect(reducedState.open).to.be.true;
  });

  it('should close folder dialog when open file dialog event fired', ()=>{
    state.open = true;
    var reducedState = folderDialog(state,{type:Events.closeFolderDialogEvent});
    expect(reducedState.open).to.be.false;
  });

  it('should update state with errors when createFolderErrorEvent fired', ()=>{
    var reducedState = folderDialog(state, {type:Events.createFolderErrorEvent, pathMessage: errors.path, folderMessage: errors.file})

    expect(reducedState.pathMessage).to.be.ok;
    expect(reducedState.folderMessage).to.be.ok;
  });

  it('should clear folder error messages when the close event is fired', ()=>{
    var errorState = folderDialog(state, {type:Events.createFolderErrorEvent, pathMessage: errors.path, folderMessage: errors.file});
    var clearedState = folderDialog(errorState, {type:Events.closeFolderDialogEvent});

    expect(clearedState.pathMessage).to.not.be.ok;
    expect(clearedState.folderMessage).to.not.be.ok;
  });

  it('should have a proper default state', ()=>{
    var defaultState = createStore(folderDialog).getState();
    expect(defaultState.open).to.equal(false);
    expect(defaultState.title).to.equal('Add a folder');
  })

});
