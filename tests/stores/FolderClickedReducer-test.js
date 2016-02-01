import {expect} from 'chai';
import folderClicked from 'src/stores/reducers/FolderClickedReducer';
import Events from 'src/components/Events';

describe('FolderClickedReducer', ()=>{
  var state;

  before(()=>{
    state = {
          name:'FooApp',
          open:false,
          folders:[{
            name:'FooAssets',
            open:false,
            folders:[],
            files:[]
          }],
          files:[]
    }
  });

  it('should toggle folders open status when fired', ()=>{
    var openState = folderClicked(state, {type:Events.folderClickedEvent, path:state.name});
    expect(openState.open).to.be.true;
    var closedState = folderClicked(openState, {type:Events.folderClickedEvent, path:state.name});
    expect(closedState.open).to.be.false;
  });

  it('should toggle child folders correctly', ()=>{
    var openState = folderClicked(state, {type:Events.folderClickedEvent, path:state.name + '/' + state.folders[0].name});
    expect(openState.folders[0].open).to.be.true;
  });
});
