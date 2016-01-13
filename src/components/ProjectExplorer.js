import React from 'react';
import Folder from './Folder';

import mui from 'material-ui';

var {Card,Tab,Tabs} = mui;

export default class ProjectExplorer extends React.Component{

  constructor(props){
    //get from the database
    super(props);
    this.state = {
      fileStructure : {
        name:'ShaderApp',
        folders:[{
          name:'Assets',
          folders:[{
            name:'Shaders',
            files:[{
              name:'vertex.glsl',
              mode:'glsl',
              content:'void main(){}'
            },
            {
              name:'fragment.glsl',
              mode:'glsl',
              content:'void main(){}'
            }]
          }],
          files:[{
            name:'render.js',
            mode:'js',
            content:'function(){console.log(\'something\')}'
          },
          {
            name:'update.js',
            mode:'js',
            content:'function(){console.log(\'something\')}'
          }
        ]
        }],
        files:[]
      }
    }
  }

  render(){
    return(
        <Tabs>
        <Tab label='Project'>
          <div style={{
            color:'white',
            background:'#141414',
            height:445,
            border:''
           }}>
            <Folder folder={this.state.fileStructure} />
          </div>
        </Tab>
        </Tabs>
    );
  }
}
