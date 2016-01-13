import React from 'react';
import AceEditor from 'react-ace';
import PubSub from 'pubsub-js';
import Events from './Events';
import _ from 'lodash';
import Guid from './../util/Guid'
import mui from 'material-ui';

import 'brace/mode/glsl';
import 'brace/mode/javascript';
import 'brace/mode/text';
import 'brace/theme/chaos';

var {Tab, Tabs} = mui;

export default class EditorTabs extends React.Component{
  constructor(props){
    super(props)

    this.onEditorLoad = this.onEditorLoad.bind(this);
    this.updateTabs = this.updateTabs.bind(this);
    this.createAceEditor = this.createAceEditor.bind(this);
    this.addTab = this.addTab.bind(this);
    this.tabId = 0;
    this.sharedProps = {
      height: '445px',
      width: '100%',
      theme: 'chaos',
      fontSize: 14,
    }
    this.state = {tabs:[]};
    this.defaultTab = <Tab label='Default Tab' value = {Guid.generate()}>
      {this.createAceEditor('Default Tab', 'Select or create a file in the project explorer to get started.','text')}
    </Tab>;
  }

  componentDidMount(){
    this.fileSelectedToken = PubSub.subscribe(Events.fileSelectedEvent, (event, file)=>{
      this.addTab(file)
    });

  }

  addTab(file){
    var tab = _.find(this.state.tabs, function(t){ return t.key == file.name});
    if(!tab)
    {
      var guid = Guid.generate();
      this.state.tabs.push(
        <Tab
          label={
            <span>{file.name}
              <span
                onClick={
                  function(guid, event){
                    event.stopPropagation();
                    var filteredTabs = _.filter(this.state.tabs,(tab)=>{
                      if(tab.props.value != guid)
                      {
                        return tab;
                      }
                    });
                    this.updateTabs(filteredTabs);
                  }.bind(this,guid)
                }
                className='glyphicon glyphicon-remove'/>
            </span>
          }
          value={guid}
          key={file.name}
          onClick = {
            function(guid){
              this.setState({currentTab:guid})
            }.bind(this,guid)
          }>
          {this.createAceEditor(file.name, file.content, file.mode)}
        </Tab>
      );
      this.setState({tabs:this.state.tabs, currentTab:guid});
    }else{
      this.setState({currentTab:tab.props.value})
    }
  }

  createAceEditor(name, content, mode){
    console.log('Ace mode : ', mode);
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

  updateTabs(newTabs){
    this.setState({tabs: newTabs, currentTab: newTabs[0].props.value})
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
      <Tabs value = {this.state.currentTab}>
        {this.tabContent}
      </Tabs>
    );
  }
}
