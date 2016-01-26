import React from 'react';
import {Component,PropTypes} from 'react';
import _ from 'lodash';
import Guid from 'util/Guid';
import mui from 'material-ui';
import style from 'style/MainStyle';
import RemoveTabButton from './RemoveTabButton';

var AceEditor;
if(typeof window != 'undefined'){
  AceEditor = require('react-ace');
  require('brace/mode/glsl');
  require('brace/mode/javascript');
  require('brace/mode/text');
  require('brace/theme/chaos');
}

var {Tab, Tabs} = mui;

export default class EditorTabs extends Component{
  constructor(props){
    super(props)
    this.sharedProps = {
      height: '445px',
      width: '100%',
      theme: 'chaos',
      fontSize: 14,
    };
  }
  
  createAceEditor(name, content, mode){
    return <AceEditor
      name={name}
      mode={mode}
      height={this.sharedProps.height}
      width={this.sharedProps.width}
      theme={this.sharedProps.theme}
      fontSize={this.sharedProps.fontSize}
      onLoad={this.onEditorLoad}
      editorProps={{$blockScrolling: true}}
      value={content}/>
  }

  render(){
    var tabs = this.props.tabs.map((t)=>{
      return (
        <Tab
          key={t.id}
          value={t.id}
          label={
            <span>
              {t.file.name}
              <RemoveTabButton onClick = {(event)=>{event.stopPropagation(); this.props.onRemoveClick(t.id)}}/>
            </span>
          }
          onClick={()=>this.props.onSelectClick(t.file)}
          >
          {this.createAceEditor(t.file.name,t.file.content,t.file.mode)}
        </Tab>
      );
    });

    return (
      <Tabs value = {this.props.currentTab}>{tabs}</Tabs>
    );
  }
}
