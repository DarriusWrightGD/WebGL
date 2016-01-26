import React from 'react';
import {connect} from 'react-redux';
import EditorTabs from './EditorTabs';
import Events from './Events';

const mapStateToProps = (state)=> {
  return {
    ...state.editor.textEditor,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onRemoveClick: (id)=>{
      dispatch({type:Events.removeFileEvent, guid: id})
    },
    onSelectClick: (file)=>{
      dispatch({type:Events.fileSelectedEvent, file:file})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorTabs)
