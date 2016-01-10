import React from 'react';
import ShaderEditor from './ShaderEditor';
import ShaderLog from './ShaderLog';
import HelloGL from './HelloGL';
import HelloPoint from './demos/HelloPoint';
import {Navbar} from 'react-bootstrap';

export default class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href='#'> Shader App</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          <div className='app-content'>
            <div className='row'>
              <div className='col-s-12 col-lg-7'>
                <ShaderEditor />
              </div>
              <div className='col-s-12 col-lg-5 '>
                <div className='gl-preview-container'>
                  <HelloPoint/>
                </div>
              </div>
            </div>
            <ShaderLog/>
          </div>
        </div>
      );
  }
}
