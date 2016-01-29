import React from 'react';
import AddContentButtons from './AddContentButtons';
import actions from 'src/stores/reducers/ActionCreators';
import {connect} from 'react-redux';

const mapStateToProps = ()=>{
  return {}
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onFileDialogClick:()=>{
      dispatch(actions.openFileDialog());
    },
    onFolderDialogClick:()=>{
      dispatch(actions.openFolderDialog());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddContentButtons);
