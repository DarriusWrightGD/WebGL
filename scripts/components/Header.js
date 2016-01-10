import React from 'react';
import {Navbar} from 'react-bootstrap';

export default class Header extends React.Component{
  render(){
    return(
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'> Shader App</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
