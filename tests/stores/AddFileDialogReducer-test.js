import {expect} from 'chai';
import AddFileDialogReducer from 'src/stores/reducers/AddFileDialogReducer';
import Events from 'src/components/Events';

describe('AddFileDialogReducer test', ()=>{
  var state;
  before(()=>{
    state= {
      open:false
    }
  })

  it('should open file dialog when open file dialog event fired', ()=>{
    var reducedState = AddFileDialogReducer.reduce(state,{type:Events.openFileDialogEvent});
    expect(reducedState.open).to.be.true;
  })

  it('should close file dialog when open file dialog event fired', ()=>{
    state.open = true;
    var reducedState = AddFileDialogReducer.reduce(state,{type:Events.closeFileDialogEvent});
    expect(reducedState.open).to.be.false;
  })

});
