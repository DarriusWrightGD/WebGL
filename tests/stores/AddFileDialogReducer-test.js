import {expect} from 'chai';
import addFileDialog from 'src/stores/reducers/AddFileDialogReducer';
import Events from 'src/components/Events';
import {createStore} from 'redux';

describe('AddFileDialogReducer test', ()=>{
  var state;
  before(()=>{
    state= {
      open:false
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

    expect(defaultState.value).to.equal(1);
    expect(defaultState.extension).to.equal('.js');
    expect(defaultState.open).to.equal(false);
    expect(defaultState.fileTypes).to.include({name:'JavaScript', extension:'.js'});
    expect(defaultState.fileTypes).to.include({name:'GLSL', extension:'.glsl'});
  });

  it('should update state with error ', ()=>{

  });

});
