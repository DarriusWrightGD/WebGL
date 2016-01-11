import React from 'react';

export default class File extends React.Component{
  constructor(props){
    super(props);
    this.state = {file: this.props.file};
  }

  render(){
    return(
      <div className='folder'>
        <span><span className='glyphicon glyphicon-file file-icon'/>{this.state.file.name}</span>
      </div>
    );
  }
}
