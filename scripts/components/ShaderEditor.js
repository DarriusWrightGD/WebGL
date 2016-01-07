import React from 'react'
import AceEditor from 'react-ace'
import ReactTabs from 'react-tabs'
import PubSub from 'pubsub-js'
import Events from './Events'

import 'brace/mode/glsl'
import 'brace/theme/chaos'

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

export default class ShaderEditor extends React.Component{
  constructor(props){
    super(props)
    this.vertexShaderValue = this.fragmentShaderValue = 'void main(){\n}';
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
      PubSub.publish(Events.fragmenteShaderUpdateEvent,this.fragmentShaderValue);  
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
      <Tabs selectedIndex={0}>
        <TabList>
          <Tab>Vertex Shader</Tab>
          <Tab>Fragment Shader</Tab>
        </TabList>
        <TabPanel>
          <AceEditor
            onChange={this.onVertexShaderChange}
            name='Vertex Shader Editor'
            mode='glsl'
            theme='chaos'
            width='auto'
            height='70vh'
            fontSize={18}
            onLoad={this.onLoadVertexEditor}
            value={this.vertexShaderValue}
            editorProps={{$blockScrolling: true}}/>
        </TabPanel>
        <TabPanel>
        <AceEditor
            onChange={this.onFragmentShaderChange}
            name='Fragment Shader Editor'
            mode='glsl'
            width='auto'
            height='70vh'
            theme='chaos'
            fontSize={18}
            onLoad={this.onLoadFragmentEditor}
            value={this.fragmentShaderValue}
            editorProps={{$blockScrolling: true}}/>
        </TabPanel>
      </Tabs>
    );
  }
}