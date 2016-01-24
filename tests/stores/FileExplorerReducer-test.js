import {expect} from 'chai';
import fileExplorer from 'src/stores/reducers/FileExplorerReducer';
import Events from 'src/components/Events';


describe('FileExplorerReducer test', ()=>{
  var state;
  before(()=>{
    state = {
      folders:[{name:'Foo',open:false}],
      files:[]
    }
  });

  it('should return state back for unknown action', ()=>{
    var reducedState = fileExplorer(state,{});
    expect(reducedState).to.deep.equal(state);
  });

  it('should change state when folder open event fired', ()=>{
    var reducedState = fileExplorer(state,{type:Events.folderClickedEvent, path:state.folders[0].name});
    expect(reducedState).to.not.deep.equal(state);
  })
});
