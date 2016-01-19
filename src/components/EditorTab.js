import React from 'react'
import {Component, PropTypes} from 'react'
import RemoveIcon from 'material-ui/lib/svg-icons/content/clear';
import mui from 'material-ui';
import Events from './Events';
import style from '../style/MainStyle';
import AceEditor from 'react-ace';

import _ from 'lodash';
var {Tab} = mui;

export default class EditorTab extends Tab{
  constructor(props, context){
    super(props, context);
    this.createAceEditor = this.createAceEditor.bind(this);
    this.onEditorLoad = this.onEditorLoad.bind(this);

    this.sharedProps = {
      height: '445px',
      width: '100%',
      theme: 'chaos',
      fontSize: 14,
    }
  }

  onEditorLoad(editor){
    editor.getSession().setUseWrapMode(true);
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
    const {store} = this.context;
    const state = store.getState();

    return (
      <div>
        {this.createAceEditor(this.props.file.name, this.props.file.content, this.props.file.mode)}
      </div>
    );
  }
}

EditorTab.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}
