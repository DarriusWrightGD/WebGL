import React from 'react';
import {connect} from 'react-redux';
import Folder from './Folder';
import Events from './Events';

const mapStateToProps = (state)=>{
  return {
    ...state.editor.projectExplorer.fileExplorer
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    onFolderClick: (path)=>{
      dispatch({type:Events.folderClickedEvent, path:path});
    },
    onFileClick: (file)=>{
      dispatch({ type : Events.fileSelectedEvent,file: file})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Folder)
