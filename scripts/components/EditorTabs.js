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

    this.onEditorLoad = this.onEditorLoad.bind(this);

    this.sharedProps = {
      height: '465px',
      width: '100%',
      theme: 'chaos',
      fontSize: 14,
      mode: 'glsl'
    }

    this.defaultTab = <Tab eventKey={0} title='Default Tab'>
      <AceEditor
        name='Default Tab'
        mode={this.sharedProps.mode}
        height={this.sharedProps.height}
        width={this.sharedProps.width}
        theme={this.sharedProps.theme}
        fontSize={this.sharedProps.fontSize}
        onLoad={this.onEditorLoad}
        value={'Select or create a file in the project explorer to get started.'}/>
    </Tab>;
  }

  componentDidMount(){
  }

  onEditorLoad(editor){
    this.currentEditor = editor;
    this.currentEditor.getSession().setUseWrapMode(true);
  }

  render(){
    this.tabContent = this.tabs || this.defaultTab;

    return (
      <Tabs className='editor-tabs' defaultActiveKey={0}>
        {this.tabContent}
      </Tabs>
    );
  }
}

/*
this.vertexShaderValue = this.fragmentShaderValue = 'void main(){}';

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
*/
