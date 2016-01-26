import React from 'react';
import {Component,PropTypes} from 'react';
import Events from './Events';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import style from 'style/MainStyle';

export default class File extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {store} = this.context;
    return(
      <div className='file' onClick={()=>{
        this.props.onFileClick(this.props)
      }}>
        <div
          style={{width:'100%',background:this.hover ? 'grey': 'none'}}
          onMouseOver={()=>{this.hover = true; this.forceUpdate();}}
          onMouseOut={()=>{this.hover = false; this.forceUpdate();}}
          >
          <span>
            <FontIcon className='material-icons' style={{color:'white',verticalAlign:'bottom'}}>insert_drive_file</FontIcon>
            <span style={{fontFamily:'Roboto, sans-serif'}}>{this.props.name}</span>
          </span>
          <div style={{display:this.hover ? 'inline' : 'none'}}>
            <FontIcon className='material-icons'
              style={{color:'red',position:'absolute',right:0, verticalAlign:'middle', textAlign:'right'}}>
              clear
            </FontIcon>
          </div>
        </div>
      </div>
    );
  }
}

File.contextTypes = {
  store: PropTypes.object
}
