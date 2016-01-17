import React from 'react';
import {Component, PropTypes} from 'react';
import Folder from './Folder';
import AddFileIcon from 'material-ui/lib/svg-icons/content/add-circle';
import style from '../style/MainStyle';
import mui from 'material-ui';
//import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';

var {Card,Tab,Tabs,FlatButton, FontIcon} = mui;

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
              <FlatButton
                style={{
                  position:'absolute',
                  color:'white',
                  bottom:10,
                  left:5
                }}
                label={<span>
                        <FontIcon
                          style={{color:'white',height:15,width:15}}
                          className="mdi mdi-plus-circle"
                          />
                       </span>
                      }
                onClick={()=>{}}
              >

              </FlatButton>

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
