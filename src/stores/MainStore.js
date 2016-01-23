import React from 'react';
import Events from '../components/Events';
import EditorTab from '../components/EditorTab';
import Guid from '../util/Guid';
import RemoveIcon from 'material-ui/lib/svg-icons/content/clear';
import style from '../style/MainStyle';
import editorReducer from './reducers/EditorReducer';

var defaultTabGuid = Guid.generate();
var defaultFile = { name:'StartCoding', mode:'text', content:'Select/create a file in the project explorer to get started'};
var defaultTab = <EditorTab value={defaultTabGuid} file={defaultFile} label={
  <span>{defaultFile.name}</span>
}/>;

var initialState = {
    editor:{
      project:{
        name:'ShaderApp',
        open:true,
        folders:[{
          open: true,
          name:'Assets',
          folders:[{
            open:true,
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
    tabs: [defaultTab],
    defaultTab: defaultTab,
    currentTab: defaultTabGuid,
    errorLog:{
      messages:[]
    },
  },
}


module.exports = {
  shaderApp : function(state = initialState, action){
    switch(action.type){
      case Events.fileSelectedEvent:
      case Events.removeFileEvent:
      case Events.errorEvent:
      case Events.folderClickedEvent:
        return editorReducer.reduce(state,action);
      break;
      default:
        return state;
    }
  }
}
