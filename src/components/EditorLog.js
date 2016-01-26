import React from 'react';
import {connect} from 'react-redux';
import MessageList from './MessageList';

const mapStateToProps = (state)=>{
  return {
    messages: state.editor.errorLog.messages
  }
}

export default connect(mapStateToProps)(MessageList)
