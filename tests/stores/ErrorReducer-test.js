import ErrorReducer from 'src/stores/reducers/ErrorReducer';
import Events from 'src/components/Events';
import {expect} from 'chai';
import cloner from 'cloner';

describe('ErrorReducer tests', ()=>{
  var state;
  before(()=>{
    state = {
      messages:[]
    }
  });
  it('should add and error to the error log when error event is fired', ()=>{
    var errorMessage = 'hey there was an error';
    var newState = {
      ...state,
      messages:[...state.messages,errorMessage]
    }
    var errorState = ErrorReducer.reduce(state, {type:Events.errorEvent,message:errorMessage});
    expect(newState).to.deep.equal(errorState);
  })
});
