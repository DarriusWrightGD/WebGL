import Events from 'src/components/Events';

var initialState = {
  open:false
}

module.exports = {
  reduce: function(state = initialState, action){
    switch(action.type){
      case Events.openFileDialogEvent:
        return {
          open:true
        }
        break;
      case Events.closeFileDialogEvent:
        return {
          open:false
        }
        break;
      default:
      return state;
    }
  }
}
