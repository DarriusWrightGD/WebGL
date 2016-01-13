import React from 'react';
import mui from 'material-ui';

var AppBar = mui.AppBar;

export default class Header extends React.Component{
  render(){
    return(
      <AppBar title='Shader App'/>
    );
  }
}
