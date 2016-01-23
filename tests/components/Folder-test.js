import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Folder from 'src/components/Folder';
import File from 'src/components/File';
import {Tabs} from 'material-ui';
import ProjectExplorer from 'src/components/ProjectExplorer';
import Provider from 'src/components/Provider'
import {createStore} from 'redux'
import {shaderApp} from 'src/stores/MainStore'

var store = createStore(shaderApp);
describe('Folder tests',()=>{
  var project;
  before(()=>{
    project = {
      name:'ShaderApp',
      files:[{
        name:'foo.txt',
        mode:'text',
        content:'foo text'
      }]
    };
  });

  it('should contain files if the project structure contains files', ()=>{
    //var folder =TestUtils.renderIntoDocument(<Provider store={store}><ProjectExplorer/></Provider>);
    var folder =TestUtils.renderIntoDocument(<Folder folder={project} />);
    //var renderer = TestUtils.createRenderer();
    //renderer.render(<Folder folder={project} />);
    //var output = renderer.getRenderOutput();
    //   var file = TestUtils.findAllInRenderedTree(folder,function(component){
    //     return TestUtils.isCompositeComponentWithType(component,ProjectExplorer)
    //   });
    var children = output.props.children;
    // debugger;
    // expect(output.props.children).to.include(<div>
    //     <File key={0} file={project.files[0]}/>
    //   </div>);
  });

  // it('testing stuff', ()=>{
  //   var folder =TestUtils.renderIntoDocument(<Provider store={store}><ProjectExplorer/></Provider>);
  //   //var folder =TestUtils.renderIntoDocument(<Folder folder={project}/>);
  //   var file = TestUtils.findAllInRenderedTree(folder,function(component){
  //     return TestUtils.isCompositeComponentWithType(component,ProjectExplorer)
  //   });
  //   console.log(file);
  // });
});
