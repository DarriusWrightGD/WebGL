import {expect} from 'chai';
import addFileDialog from 'src/stores/reducers/AddFileDialogReducer';
import Events from 'src/components/Events';
import {createStore} from 'redux';

describe('AddFileDialogReducer test', ()=>{
  var state;
  before(()=>{
    state= {
      open:false,
      selectedFileIndex:1
    }
  })

  it('should open file dialog when open file dialog event fired', ()=>{
    var reducedState = addFileDialog(state,{type:Events.openFileDialogEvent});
    expect(reducedState.open).to.be.true;
  })

  it('should close file dialog when open file dialog event fired', ()=>{
    state.open = true;
    var reducedState = addFileDialog(state,{type:Events.closeFileDialogEvent});
    expect(reducedState.open).to.be.false;
  })

  it('should have the proper default state', ()=>{
    var defaultState = createStore(addFileDialog).getState();

    expect(defaultState.selectedFileIndex).to.equal(1);
    expect(defaultState.extension).to.equal('.js');
    expect(defaultState.open).to.equal(false);
    expect(defaultState.fileTypes).to.include({name:'JavaScript', extension:'.js'});
    expect(defaultState.fileTypes).to.include({name:'GLSL', extension:'.glsl'});
  });

  it('should update selectedFileIndex when event fired', ()=>{
      var reducedState = addFileDialog(state, {type:Events.fileTypeChangedEvent, selectedFileIndex:2});
      expect(reducedState.selectedFileIndex).to.equal(2);
  });

  it('should update state with errors when createFileErrorEvent fired', ()=>{
    var errors = {path:'There\'s a foo path error', file:'There\'s a bar file error'};
    var reducedState = addFileDialog(state, {type:Events.createFileErrorEvent, pathMessage: errors.path, fileMessage: errors.file})

    expect(reducedState.pathMessage).to.be.ok;
    expect(reducedState.fileMessage).to.be.ok;
  });

});
