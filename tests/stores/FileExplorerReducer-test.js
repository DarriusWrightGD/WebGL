import {expect} from 'chai';
import fileExplorer from 'src/stores/reducers/FileExplorerReducer';
import Events from 'src/components/Events';


describe('FileExplorerReducer test', ()=>{
  var state;
  before(()=>{
    state = {
      name:'Bar',
      folders:[{name:'Foo',open:false, files:[]}],
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

  it('should add a file when the createFileEvent is fired', ()=>{
    var fileCount = state.files.length;
    var fileName = 'foo.js'

    var reducedState = fileExplorer(state, {type:Events.createFileEvent,extension:'.js' , path:'Bar', fileName:fileName});
    expect(reducedState.files.length).to.equal(fileCount+1);
    expect(reducedState.files[fileCount].name).to.equal(fileName);
  })

  it('should check if the top level directory is valid before adding a file', ()=>{
    var fileCount = state.files.length;
    var fileName = 'foo.js'

    var reducedState = fileExplorer(state, {type:Events.createFileEvent,extension:'.js' , path:'FooBarz', fileName:fileName});
    expect(reducedState.files.length).to.equal(fileCount);
  })
});
