import React from 'react';
import {Component,PropTypes} from 'react';
import Events from './Events';
import _ from 'lodash';
import Guid from 'util/Guid'
import mui from 'material-ui';
import RemoveIcon from 'material-ui/lib/svg-icons/content/clear';
import style from 'style/MainStyle';

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

    var tabs = this.props.tabs.map((t)=>{
      return (<Tab key={t.key} value={t.props.value} label={t.props.label} onClick = {function(){
                store.dispatch({type:Events.fileSelectedEvent, file:t.props.file});
              }.bind(t)}>
        {t}
      </Tab>);
    });
    return (
      <Tabs value = {this.props.currentTab}>
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
