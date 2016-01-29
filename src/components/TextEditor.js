import React from 'react';
import {connect} from 'react-redux';
import EditorTabs from './EditorTabs';
import Events from './Events';
import actions from 'src/stores/reducers/ActionCreators';

const mapStateToProps = (state)=> {
  return {
    ...state.editor.textEditor,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onRemoveClick: (id)=>{
      dispatch(actions.removeFile(id));
    },
    onSelectClick: (file)=>{
      dispatch(actions.selectFile(file));
    },
    onFileChange: (content, path, fileName)=>{
      dispatch(actions.updateFileContent(content,path,fileName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorTabs)
