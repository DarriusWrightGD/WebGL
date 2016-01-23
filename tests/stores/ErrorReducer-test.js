import ErrorReducer from 'src/stores/reducers/ErrorReducer';
import deepFreeze from 'deep-freeze';
import Events from 'src/components/Events';
import {expect} from 'chai';
import cloner from 'cloner';

describe('ErrorReducer tests', ()=>{
  var state;
  before(()=>{
    state = {
      editor:{
        errorLog:{
          messages:[]
        }
      }
    }
  });
  it('should add and error to the error log when error event is fired', ()=>{
    var errorMessage = 'hey there was an error';
    var newState = cloner.deep.copy(state);
    newState.editor.errorLog.messages.push(errorMessage);
    var errorState = ErrorReducer.reduce(state, {type:Events.errorEvent,message:errorMessage});
    expect(newState).to.deep.equal(errorState);
  })
});
