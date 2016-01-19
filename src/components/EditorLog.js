import React from 'react';
import Events from './Events';
import mui from 'material-ui';
import ErrorIcon from 'material-ui/lib/svg-icons/content/clear';
import style from '../style/MainStyle';

var {Card} = mui;

export default class EditorLog extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(()=>{
      this.forceUpdate();
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    var errorLog;
    const  {store} = this.context;
    const state = store.getState();

    var errorLog = state.editor.errorLog.messages.map((message, index)=>{
      return (<div key={index}>
        <ErrorIcon style={style.errorIcon}/>
        <span className='error-log-text'>{message}</span>
      </div>);
    });

    return (
      <Card style={{
        margin:'auto',
        marginBottom: 20,
        width: '90%'
      }}>
        <h2 style={{marginLeft:20}}>Error Log</h2>
        {errorLog}
      </Card>
    );
  }
}

EditorLog.contextTypes = {
  store: React.PropTypes.object
}
