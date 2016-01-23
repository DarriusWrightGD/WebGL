import React from 'react';
import {Component, PropTypes} from 'react';
import Folder from './Folder';
import AddFileIcon from 'material-ui/lib/svg-icons/content/add-circle';
import style from 'style/MainStyle';
import mui from 'material-ui';
//import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';

var {Card,Tab,Tabs,FlatButton, FontIcon, IconButton} = mui;

class ProjectExplorer extends Component{
  constructor(props, context)
  {
    super(props,context);
    this.store = context.store;
  }

  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(()=> this.forceUpdate());
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const state = this.store.getState();
    return(
        <Tabs>
          <Tab label='Project'>
            <div style={{
              color:'white',
              background:'#141414',
              height:445,
              borderRight:'1px solid grey'
             }}>
              <Folder folder={state.editor.project} />
              <div style={{
                    position:'absolute',
                    color:'white',
                    bottom:10,
                    left:'25%',
                    borderTop: '1px solid grey'
                  }}>
                  <IconButton
                    style={{cursor:'pointer'}}
                    iconClassName="material-icons"
                    tooltip='Add File'>
                    <span style={{color:'white'}}>note_add</span>
                  </IconButton>
                  <IconButton
                    style={{cursor:'pointer'}}
                    iconClassName="material-icons"
                    tooltip='Add Folder'>
                    <span style={{color:'white'}}>create_new_folder</span>
                  </IconButton>
              </div>
            </div>
          </Tab>
        </Tabs>
    );
  }
}

ProjectExplorer.contextTypes = {
  store: PropTypes.object
}

export default ProjectExplorer;
