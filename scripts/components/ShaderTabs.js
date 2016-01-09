import React from 'react';
import AceEditor from 'react-ace';
import PubSub from 'pubsub-js';
import {Events} from './Events';
import {Tab,Tabs} from 'react-bootstrap';

import 'brace/mode/glsl';
import 'brace/theme/chaos';

export default class ShaderTabs extends React.Component{
  constructor(props){
    super(props)
    this.vertexShaderValue = this.fragmentShaderValue = 'void main(){}';
    this.bindEvents = this.bindEvents.bind(this);
    this.bindEvents();
  }

  bindEvents(){
    this.onVertexShaderChange = this.onVertexShaderChange.bind(this);
    this.onFragmentShaderChange = this.onFragmentShaderChange.bind(this);
    this.onLoadVertexEditor = this.onLoadVertexEditor.bind(this);
    this.onLoadFragmentEditor = this.onLoadFragmentEditor.bind(this);
  }


  onVertexShaderChange(text){
    if(text !== '')
    {
      this.vertexShaderValue = text;
      PubSub.publish(Events.vertexShaderUpdateEvent,this.vertexShaderValue);
    }
  }

  onFragmentShaderChange(text){
    if(text !== '')
    {
      this.fragmentShaderValue = text;
      PubSub.publish(Events.fragmentShaderUpdateEvent,this.fragmentShaderValue);
    }
  }

  onLoadFragmentEditor(editor)
  {
    this.currentEditor = editor;
    editor.setValue(this.fragmentShaderValue,1);
  }

  onLoadVertexEditor(editor)
  {
    this.currentEditor = editor;
    editor.setValue(this.vertexShaderValue,1);
  }

  render(){
    return (
      <Tabs defaultActiveKey={0}>
      <Tab eventKey={0} title='Vertex Shader'>
      <AceEditor
      onChange={this.onVertexShaderChange}
      name='Vertex Shader Editor'
      mode='glsl'
      width='auto'
      height='50vh'
      theme='chaos'
      fontSize={14}
      onLoad={this.onLoadVertexEditor}
      value={this.vertexShaderValue}/>
      </Tab>
      <Tab eventKey={1} title='FragmentShader'>
      <AceEditor
      onChange={this.onFragmentShaderChange}
      name='Fragment Shader Editor'
      mode='glsl'
      width='auto'
      height='50vh'
      theme='chaos'
      fontSize={14}
      onLoad={this.onLoadFragmentEditor}
      value={this.fragmentShaderValue}
      editorProps={{$blockScrolling: true}}/>
      </Tab>
      </Tabs>
    );
  }
}
