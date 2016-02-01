import addFileDialog from 'src/stores/reducers/AddFileDialogReducer';
import {expect} from 'chai';
import Events from 'src/components/Events';
import {createStore} from 'redux';


describe('AddFileDialogReducer', ()=>{
  var state;
  var errors;

  before(()=>{
    state= {
        open:false,
        selectedFileIndex:1
    };
    errors = {path:'There\'s a foo path error', file:'There\'s a bar file error'};
  })

  it('should open file dialog when open file dialog event fired', ()=>{
    var reducedState = addFileDialog(state,{type:Events.openFileDialogEvent});
    expect(reducedState.open).to.be.true;
  })

  it('should close file dialog when close file dialog event fired', ()=>{
    state.open = true;
    var reducedState = addFileDialog(state,{type:Events.closeFileDialogEvent});
    expect(reducedState.open).to.be.false;
  })

  it('should clear file error messages when the close event is fired', ()=>{
    var errorState = addFileDialog(state, {type:Events.createFileErrorEvent, pathMessage: errors.path, fileMessage: errors.file});
    var clearedState = addFileDialog(errorState, {type:Events.closeFileDialogEvent});

    expect(clearedState.pathMessage).to.not.be.ok;
    expect(clearedState.fileMessage).to.not.be.ok;
  });

  it('should update selectedFileIndex when event fired', ()=>{
      var reducedState = addFileDialog(state, {type:Events.fileTypeChangedEvent, selectedFileIndex:2});
      expect(reducedState.selectedFileIndex).to.equal(2);
  });

  it('should update state with errors when createFileErrorEvent fired', ()=>{
    var reducedState = addFileDialog(state, {type:Events.createFileErrorEvent, pathMessage: errors.path, fileMessage: errors.file})

    expect(reducedState.pathMessage).to.be.ok;
    expect(reducedState.fileMessage).to.be.ok;
  });

  it('should have the correct defaultState', ()=>{
    var defaultState = createStore(addFileDialog).getState();

    expect(defaultState.selectedFileIndex).to.equal(1);
    expect(defaultState.fileTypes).to.include({name:'JavaScript', extension:'.js'});
    expect(defaultState.fileTypes).to.include({name:'GLSL', extension:'.glsl'});
    expect(defaultState.extension).to.equal('.js');
    expect(defaultState.open).to.equal(false);
    expect(defaultState.title).to.equal('Add a file');

  })

});
