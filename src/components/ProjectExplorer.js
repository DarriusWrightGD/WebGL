import React from 'react';
import {Component, PropTypes} from 'react';
import FileExplorer from './FileExplorer';
import style from 'style/MainStyle';
import mui from 'material-ui';
import AddContentDialogContainer from './AddContentDialogContainer';
import AddContentButtonsContainer from './AddContentButtonsContainer';

var {Tab,Tabs} = mui;

export default class ProjectExplorer extends Component{
  render(){
    return(
        <Tabs>
          <Tab label='Project'>
            <div style={style.fileExplorer}>
              <FileExplorer/>
              <div style={style.addContentButtonGroup}>
                  <AddContentButtonsContainer/>
                  <AddContentDialogContainer/>
              </div>
            </div>
          </Tab>
        </Tabs>
    );
  }
}

export default ProjectExplorer;
