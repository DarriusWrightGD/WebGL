import React from 'react';
import Events from './Events';
import mui from 'material-ui';
import ErrorIcon from 'material-ui/lib/svg-icons/content/clear';
import style from 'style/MainStyle';

var {Card,List, ListItem} = mui;


export default ({messages})=>{

  var messageList = messages.map((message, index)=>{
    return (
      <ListItem key={index} primaryText={
        <span>
          <ErrorIcon style={style.errorIcon}/>
          <span className='error-log-text'>{message}</span>
        </span>
      }/>
    );
  });

  return(
    <Card style={{
      margin:'auto',
      marginBottom: 20,
      width: '90%'
    }}>
      <h2 style={{marginLeft:20}}>Error Log</h2>
      <List >
        {messageList}
      </List>
    </Card>
  );
}
