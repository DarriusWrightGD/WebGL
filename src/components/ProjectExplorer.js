import React from 'react';
import {Component, PropTypes} from 'react';
import FileExplorer from './FileExplorer';
import style from 'style/MainStyle';
import mui from 'material-ui';
import AddFolderButton from './AddFolderButton';
import AddFileButton from './AddFileButton';
import AddContentDialogContainer from './AddContentDialogContainer';

var {Tab,Tabs} = mui;

export default class ProjectExplorer extends Component{
  render(){
    return(
        <Tabs>
          <Tab label='Project'>
            <div style={{
              color:'white',
              background:'#141414',
              height:445,
              borderRight:'1px solid grey'
             }}>
              <FileExplorer/>
              <div style={{
                    position:'absolute',
                    color:'white',
                    bottom:10,
                    left:'25%',
                    borderTop: '1px solid grey'
                  }}>
                  <AddFileButton/>
                  <AddFolderButton/>
                  <AddContentDialogContainer/>
              </div>
            </div>
          </Tab>
        </Tabs>
    );
  }
}

export default ProjectExplorer;
