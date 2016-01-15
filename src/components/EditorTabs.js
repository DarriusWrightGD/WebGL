import React from 'react';
import {Component,PropTypes} from 'react';
import AceEditor from 'react-ace';
import PubSub from 'pubsub-js';
import Events from './Events';
import _ from 'lodash';
import Guid from './../util/Guid'
import mui from 'material-ui';
import RemoveIcon from 'material-ui/lib/svg-icons/content/clear';
import style from '../style/MainStyle';


import 'brace/mode/glsl';
import 'brace/mode/javascript';
import 'brace/mode/text';
import 'brace/theme/chaos';

var {Tab, Tabs} = mui;

export default class EditorTabs extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const {store} = this.context;
    var state = store.getState();
    var tabs = state.editor.tabs.map((t)=>{
      return (<Tab key={t.key} value={t.props.value} label={t.props.label} onClick = {function(){
                const {store} = this.context;
                store.dispatch({type:Events.fileSelectedEvent, guid:this.props.value});
              }.bind(t)}>
        {t}
      </Tab>);
    });
    return (
      <Tabs value = {state.editor.currentTab}>
        {
          tabs
        }
      </Tabs>
    );
  }
}

EditorTabs.contextTypes = {
  store: PropTypes.object
}
