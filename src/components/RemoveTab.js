import React from 'react';
import ClearIcon from 'material-ui/lib/svg-icons/content/clear';
import style from 'style/MainStyle';
import Events from './Events';

export default class RemoveTab extends React.Component{

  render(){
      return (<ClearIcon
      style={style.removeIcon}
      onClick={(event)=>{
        event.stopPropagation();
        const {store} = this.context;
        store.dispatch({type:Events.removeFileEvent, guid: this.props.tabGuid})
        }
      }/>);
  }
}

RemoveTab.contextTypes = {
  store: React.PropTypes.object
}
