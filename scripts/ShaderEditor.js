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
    this.vertexShaderValue = this.fragmentShaderValue = 'void main(){}';
    this.bindEvents();
  }

  bindEvents(){
    this.onVertexShaderChange = this.onVertexShaderChange.bind(this);
    this.onFragmentShaderChange = this.onFragmentShaderChange.bind(this);
    this.onLoadVertexEditor = this.onLoadVertexEditor.bind(this);
    this.onLoadFragmentEditor = this.onLoadFragmentEditor.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index, last){

  }

  onVertexShaderChange(text){
    if(text !== '')
    {
      this.vertexShaderValue = text;
      console.log("Pubevent text",text);
      PubSub.publish(Events.vertexShaderUpdateEvent,this.vertexShaderValue);  
    }
  }

  onFragmentShaderChange(text){
    this.fragmentShaderValue = text;
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
      <Tabs onSelect={this.handleSelect} selectedIndex={0}>
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
            onLoad={this.onLoadFragmentEditor}
            value={this.fragmentShaderValue}
            editorProps={{$blockScrolling: true}}/>
        </TabPanel>
      </Tabs>
    );
  }
}