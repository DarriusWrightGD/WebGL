import {expect} from 'chai'
import addProgram from 'src/stores/reducers/AddProgramDialogReducer';
import Events from 'src/components/Events';
import {createStore} from 'redux';

describe('AddProgramDialog', ()=>{
  var state;

  describe('initialState', ()=>{
    it('should have all variables default initialized correctly',()=>{
      var initialState = {
        open:false,
        title:'Add Program'
      };
      var storeState = createStore(addProgram).getState();
      expect(storeState).to.deep.equal(initialState);
    });
  });

  describe('createProgramLocationErrorEvent',()=>{
    before(()=>{
      state = {};
    })
    it('should update the state with error if the event is fired with a location errors', ()=>{
      var errors = {pathMessage:'There is a path error', fileMessage: 'There is a file error'};
      var newState = {
        ...state,
        ...errors
      }
      var reducedState = addProgram(state,{type:Events.createProgramLocationErrorEvent, ...errors});
      expect(reducedState).to.deep.equal(newState);
    });


    it('should update the state with errors if the event is fired with shader errors', ()=>{
      var errors = {vertexShaderMessage:'There is a vertexShader error', fragmentShaderMessage:'There is a fragment shader error'};
      var newState = {
        ...state,
        ...errors
      }
      var reducedState = addProgram(state, {type:Events.createProgramShaderErrorEvent, ...errors});
      expect(reducedState).to.deep.equal(newState);
    });
  });

  describe('closeProgramDialogEvent', ()=>{
    before(()=>{
      state={
        ...state,
        open:true
      }
    });

    it('should close the dialog when the event is fired', ()=>{
      var newState = {
        ...state,
        open:false
      };

      var reducedState = addProgram(state, {type: Events.closeProgramDialogEvent});
      expect(reducedState).to.deep.equal(newState);
    });
  });

  describe('openProgramDialogEvent', ()=>{
    before(()=>{
      state={
        open:false
      };
    });

    it('should open the dialog when the event is fired', ()=>{
      var newState = {
        open:true
      };
      var reducedState = addProgram(state, {type: Events.openProgramDialogEvent});
      expect(reducedState).to.deep.equal(newState);
    })
  })
})
