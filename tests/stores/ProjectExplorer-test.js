import {expect} from 'chai';
import ProjectExplorerReducer from 'src/stores/reducers/ProjectExplorerReducer';

describe('ProjectExplorerReducer tests', function(){
  var state;

  before(()=>{
    state = {
      fileExplorer:{
        folders:[{name:'fooOlder', open:false}],
        files:[{name:'foo.txt',content:'console.log(foo)', type:'text'}]
      },
      addFileDialog:{
        open:false
      }
    }
  });

  it('should set up the folder explorer correcly if initialState populates it', ()=>{
    var reducedState = ProjectExplorerReducer.reduce(state,{});
    expect(reducedState.fileExplorer).to.deep.equal(state.fileExplorer);
  });

  it('should set up the add dialog correcly if initialState populates it', ()=>{
    var reducedState = ProjectExplorerReducer.reduce(state,{});
    expect(reducedState.addFileDialog).to.deep.equal(state.addFileDialog);
  });
});
