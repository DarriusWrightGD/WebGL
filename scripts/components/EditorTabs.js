import React from 'react';
import AceEditor from 'react-ace';
import PubSub from 'pubsub-js';
import {Events} from './Events';
import {Tab,Tabs} from 'react-bootstrap';

import 'brace/mode/glsl';
import 'brace/theme/chaos';

export default class EditorTabs extends React.Component{
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

  componentDidMount(){
    this.onVertexShaderChange(this.vertexShaderValue);
    this.onFragmentShaderChange(this.fragmentShaderValue);
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
    var sharedProps = {
      height: '465px',
      width: '100%',
      theme: 'chaos',
      fontSize: 14,
      mode: 'glsl'
    }
    return (
      <Tabs defaultActiveKey={0}>
        <Tab eventKey={0} title='Vertex Shader'>
          <AceEditor
            onChange={this.onVertexShaderChange}
            name='Vertex Shader Editor'
            mode={sharedProps.mode}
            height={sharedProps.height}
            width={sharedProps.width}
            theme={sharedProps.theme}
            fontSize={sharedProps.fontSize}
            onLoad={this.onLoadVertexEditor}
            value={this.vertexShaderValue}/>
        </Tab>
        <Tab eventKey={1} title='FragmentShader'>
          <AceEditor
            onChange={this.onFragmentShaderChange}
            mode={sharedProps.mode}
            height={sharedProps.height}
            width={sharedProps.width}
            theme={sharedProps.theme}
            fontSize={sharedProps.fontSize}
            onLoad={this.onLoadFragmentEditor}
            value={this.fragmentShaderValue}
            editorProps={{$blockScrolling: true}}/>
        </Tab>
      </Tabs>
    );
  }
}
