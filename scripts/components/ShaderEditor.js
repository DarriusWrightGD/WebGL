import React from 'react'
import AceEditor from 'react-ace'
import PubSub from 'pubsub-js'
import {Events} from './Events'
import {Panel,Tabs,Tab} from 'react-bootstrap';

import 'brace/mode/glsl'
import 'brace/theme/chaos'

export default class ShaderEditor extends React.Component{
  constructor(props){
    super(props)
    this.state = {shaderError : ''};
    this.vertexShaderValue = this.fragmentShaderValue = 'void main(){\n}';
    this.bindEvents();
  }

  bindEvents(){
    this.onVertexShaderChange = this.onVertexShaderChange.bind(this);
    this.onFragmentShaderChange = this.onFragmentShaderChange.bind(this);
    this.onLoadVertexEditor = this.onLoadVertexEditor.bind(this);
    this.onLoadFragmentEditor = this.onLoadFragmentEditor.bind(this);
    this.setErrorText = this.setErrorText.bind(this);
  }

  componentWillMount(){
    this.errorToken = PubSub.subscribe(Events.shaderErrorEvent, function(e, errorText){
      this.setErrorText(errorText);
    }.bind(this));
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.errorText);
  }

  setErrorText(errorText){
    this.setState({shaderError : errorText});
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
    var sharedProperties = {
      mode: 'glsl',
      theme: 'choas',
      width: 'auto',
      height: '30vh',
      fontSize: 14
    };

    return (
      <div>
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
              value={this.vertexShaderValue}
              editorProps={{$blockScrolling: true}}/>
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
        <Panel header='Shader Log' bsStyle='danger'>
          <div className='errorLog'>
           {this.state.shaderError}
          </div>
        </Panel>
      </div>
    );
  }
}
