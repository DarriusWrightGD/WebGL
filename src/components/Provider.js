import React from 'react';
import {Component, PropTypes} from 'react';

export default class Provider extends Component{
  getChildContext(){
    return {
      store:this.props.store,
      muiTheme: this.props.muiTheme
    };
  }

  render(){
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
};
