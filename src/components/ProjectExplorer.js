import React from 'react';
import {Component, PropTypes} from 'react';
import Folder from './Folder';
import style from 'style/MainStyle';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import AddFolderButton from './AddFolderButton';
import AddFileButton from './AddFileButton';

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
    return(
        <Tabs>
          <Tab label='Project'>
            <div style={{
              color:'white',
              background:'#141414',
              height:445,
              borderRight:'1px solid grey'
             }}>
              <Folder {...this.props.fileExplorer} />
              <div style={{
                    position:'absolute',
                    color:'white',
                    bottom:10,
                    left:'25%',
                    borderTop: '1px solid grey'
                  }}>
                  <AddFileButton/>
                  <AddFolderButton/>
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
