import cloner from 'cloner';
import Events from 'src/components/Events';
var initialState = {
  messages:[]
};

module.exports = {
  reduce: function(state = initialState,action){
    switch(action.type){
      case Events.errorEvent:
        return {
          ...state,
          messages: [...state.messages, action.message]
        };
      break;
      default:
      return state;
    }
  }
}
