import React from 'react';
import Folder from './Folder';

export default class ProjectExplorer extends React.Component{

  constructor(props){
    //get from the database
    super(props);
    this.state = {
      fileStructure : {
        name:'ProjectName',
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
      <div className='project-explorer'>
        <div className='project-explorer-content'>
          <div>
            <span>Project</span>
          </div>
          <div>
            <Folder folder={this.state.fileStructure} />
          </div>
        </div>
      </div>
    );
  }
}
