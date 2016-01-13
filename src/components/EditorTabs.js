import React from 'react';
import AceEditor from 'react-ace';
import PubSub from 'pubsub-js';
import {Events} from './Events';
import _ from 'lodash';

import mui from 'material-ui';

import 'brace/mode/glsl';
import 'brace/mode/javascript';
import 'brace/mode/text';
import 'brace/theme/chaos';


var {Tab, Tabs} = mui;

function createGuid(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
});

}

export default class EditorTabs extends React.Component{
  constructor(props){
    super(props)

    this.onEditorLoad = this.onEditorLoad.bind(this);
    this.tabId = 0;
    this.sharedProps = {
      height: '445px',
      width: '100%',
      theme: 'chaos',
      fontSize: 14,
      mode: 'text',
      editorProps:{$blockScrolling: true}
    }
    this.state = {tabs:[]};
    this.defaultTab = <Tab label='Default Tab' value = {createGuid()}>
      <AceEditor
        name='Default Tab'
        mode={this.sharedProps.mode}
        height={this.sharedProps.height}
        width={this.sharedProps.width}
        theme={this.sharedProps.theme}
        fontSize={this.sharedProps.fontSize}
        onLoad={this.onEditorLoad}
        editorProps={this.editorProps}
        value={'Select or create a file in the project explorer to get started.'}/>
    </Tab>;
  }

  componentDidMount(){
    this.fileSelectedToken = PubSub.subscribe(Events.fileSelectedEvent, (event, file)=>{
      var guid = createGuid();
      debugger;
      if(!_.find(this.state.tabs, function(t){
        return t.props.key == file.name
      }))
      {
        this.state.tabs.push(
          <Tab
          label={
            <span>{file.name} <span onClick={
            function(guid){
                var filteredTabs = _.filter(this.state.tabs,(tab)=>{
                    if(tab.props.value != guid)
                    {
                      return tab;
                    }
                  });
                this.setState({tabs: filteredTabs, currentTab: filteredTabs[0].props.value})
              }.bind(this,guid)}
              className='glyphicon glyphicon-remove'/>
            </span>
          }
          value={guid}
          key={file.name}
          onClick = {function(guid){this.setState({currentTab:guid})}.bind(this,guid)}>
            <AceEditor
            name={file.name}
            mode={file.mode}
            height={this.sharedProps.height}
            width={this.sharedProps.width}
            theme={this.sharedProps.theme}
            fontSize={this.sharedProps.fontSize}
            onLoad={this.onEditorLoad}
            editorProps={this.editorProps}
            value={file.content}/>
          </Tab>
        );
        this.setState({tabs:this.state.tabs, currentTab:guid});

      }
    });

  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.fileSelectedToken);
  }

  onEditorLoad(editor){
    this.currentEditor = editor;
    this.currentEditor.getSession().setUseWrapMode(true);
  }

  render(){
    this.tabContent = this.state.tabs.length > 0 ? this.state.tabs : this.defaultTab;

    return (
      <Tabs onChange={(value)=>{console.log('handle switch : ',value );this.setState({currentTab : value})}} value = {this.state.currentTab} style={{
        maxHeight:400,
        marginBottom:20
      }}>
        {this.tabContent}
      </Tabs>
    );
  }
}
