import React from 'react';
import Events from '../components/Events';
import EditorTab from '../components/EditorTab';
import Guid from '../util/Guid';
import RemoveIcon from 'material-ui/lib/svg-icons/content/clear';
import style from '../style/MainStyle';
import selectFile from './util/SelectFileHandler';
import removeFile from './util/RemoveFileHandler';

var defaultTabGuid = Guid.generate();
var defaultFile = { name:'Start coding', mode:'text' ,content:'Select/create a file in the project explorer to get started'};
var defaultTab = <EditorTab value={defaultTabGuid} key={'StartCoding'} file={defaultFile} label={
  <span>{defaultFile.name}</span>
}/>;

var initialState = {
    project:{
      name:'ShaderApp',
      folders:[{
        name:'Assets',
        folders:[{
          name:'Shaders',
          files:[{
            name:'vertex.glsl',
            mode:'glsl',
            content:'void main(){}'
          },
          {
            name:'fragment.glsl',
            mode:'glsl',
            content:'void main(){}'
          }]
        }],
        files:[{
          name:'render.js',
          mode:'javascript',
          content:'function(){console.log(\'something\')}'
        },
        {
          name:'update.js',
          mode:'javascript',
          content:'function(){console.log(\'something\')}'
        }
      ]
      }],
      files:[]
  },
  errors:[],
  fileSelected:{},
  editor:{
    tabs: [defaultTab],
    defaultTab: defaultTab,
    currentTab: defaultTabGuid
  },
}


module.exports = {
  shaderApp : function(state = initialState, action){
    switch(action.type){
      case Events.fileSelectedEvent:
        return selectFile.handle(state,action);
        break;
      case Events.removeFileEvent:
        return removeFile.handle(state,action);
      default:
        return state;
    }
  }
}
