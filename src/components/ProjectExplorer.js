import React from 'react';
import {Component, PropTypes} from 'react';
import Folder from './Folder';

import mui from 'material-ui';

var {Card,Tab,Tabs} = mui;

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
              <Folder folder={state.project} />
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
