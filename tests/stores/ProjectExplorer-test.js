import {expect} from 'chai';
import projectExplorer from 'src/stores/reducers/ProjectExplorerReducer';

describe('ProjectExplorerReducer tests', function(){
  var state;

  before(()=>{
    state = {
      fileExplorer:{
        folders:[{name:'fooOlder', open:false}],
        files:[{name:'foo.txt',content:'console.log(foo)', type:'text'}]
      },
      addContentDialog:{
        fileDialog: {
          open:false
        },
        folderDialog:{
          open:false
        }
      }
    }
  });

  it('should set up the folder explorer correcly if initialState populates it', ()=>{
    var reducedState = projectExplorer(state,{});
    expect(reducedState.fileExplorer).to.deep.equal(state.fileExplorer);
  });

  it('should set up the add dialog correcly if initialState populates it', ()=>{
    var reducedState = projectExplorer(state,{});
    expect(reducedState.addContentDialog).to.deep.equal(state.addContentDialog);
  });
});
