import {expect} from 'chai';
import fileExplorer from 'src/stores/reducers/FileExplorerReducer';
import Events from 'src/components/Events';


describe('FileExplorerReducer test', ()=>{
  var state;
  before(()=>{
    state = {
      name:'Bar',
      folders:[{name:'Foo',open:false, files:[]}],
      files:[{name:'foo.js',content:'There is file content', path:'Bar'}]
    }
  });

  it('should update file content when update content fired', ()=>{
    var newContent = 'Some new content';
    var file = {path:'Bar', content:newContent}
    var reducedState = fileExplorer(state,{type:Events.updateFileContentEvent, content: newContent,
      path:'Bar', name:'foo.js' });
    expect(reducedState).to.not.deep.equal(state);
    expect(reducedState.files[0].content).to.equal(newContent);
  });

  it('should return state back for unknown action', ()=>{
    var reducedState = fileExplorer(state,{});
    expect(reducedState).to.deep.equal(state);
  });

  it('should change state when folder open event fired', ()=>{
    var reducedState = fileExplorer(state,{type:Events.folderClickedEvent, path: 'Bar/Foo'});
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

    expect(fileExplorer.bind(fileExplorer,state, {type:Events.createFileEvent,extension:'.js' , path:'FooBarz', fileName:fileName})).
      to.throw('The path FooBarz does not exist');
  })

  it('should add a folder when the createFolderEvent is fired', ()=>{
    var folderCount = state.folders.length;
    var folderName = 'NewFoo';

    var reducedState = fileExplorer(state,{type:Events.createFolderEvent,path: 'Bar',folderName: folderName});
    expect(reducedState.folders.length).to.equal(folderCount+1);
    expect(_.find(reducedState.folders, (folder)=>{
      return folder.name === folderName;
    })).to.be.ok;
  });
});
