import {expect} from 'chai';
import FolderClickedReducer from 'src/stores/reducers/FolderClickedReducer';
import deepFreeze from 'deep-freeze';
import Events from 'src/components/Events';

describe('FolderClickedReducer test', ()=>{
  var state;

  before(()=>{
    state = {
      editor:{
        project:{
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
      }

    }
  });

  it('should toggle folders open status when fired', ()=>{
    var openState = FolderClickedReducer.reduce(state, {type:Events.folderClickedEvent, path:state.editor.project.name});
    expect(openState.editor.project.open).to.be.true;
    var closedState = FolderClickedReducer.reduce(openState, {type:Events.folderClickedEvent, path:state.editor.project.name});
    expect(closedState.editor.project.open).to.be.false;
  });

  it('should toggle child folders correctly', ()=>{
    var openState = FolderClickedReducer.reduce(state, {type:Events.folderClickedEvent, path:state.editor.project.name + '/' + state.editor.project.folders[0].name});
    expect(openState.editor.project.folders[0].open).to.be.true;
  });

  it('should throw an error if the folder does not exist', ()=>{
    expect(FolderClickedReducer.reduce.bind(FolderClickedReducer,state,{type:Events.folderClickedEvent, path:'foo/bar/path'})).
      to.throw(Error, /foo, directory does not exist/);
  })
});
