import React from 'react';
import mui from 'material-ui';
import Events from './Events';

var {IconButton, FlatButton, Dialog, TextField, MenuItem, SelectField} = mui;

export default class AddFileDialog extends React.Component{
  constructor(props,context){
    super(props,context)
    this.store = context.store;
    this.state = {value:1};
  }

  close= ()=>{
    this.store.dispatch({type:Events.closeFileDialogEvent});
  };

  submit= ()=>{
    this.store.dispatch({type:Events.createFileEvent});
  };

  handleFileChange= (event, index, value)=>{
    this.store.dispatch({type:Events.fileTypeChangedEvent, value:value});
  };

  addFile= ()=>{
    this.pathMessage = this.props.validatePath(this.path);
    this.fileMessage = this.props.validateFile(this.path,this.file + this.props.fileTypes[index].extension);
    if(this.pathMessage || this.fileMessage){
      this.store.dispatch({type:Events.createFileErrorEvent, pathMessage:this.pathMessage, fileMessage: this.fileMessage});
    }else{
      this.store.dispatch({type:Events.createFileEvent,path:this.path, fileName:this.fileName, extension:this.props.fileTypes[index].extension});
    }
  };

  render(){

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.close} />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.submit} />,
    ];

    var items = this.props.fileTypes.map((fileType,index)=>{
      return <MenuItem value={index+1} key={index+1} primaryText={fileType.name} label={fileType.extension}/>
    });

    return (
      <Dialog
        title="Add a file"
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.close}>
        <div style={{paddingLeft:'30%', width:'100%'}}>
          <div>
            <TextField ref={node=> {this.path = node}} hintText='Enter path'/>
          </div>
          <div>
            <TextField ref={node=>this.fileName = node} hintText='Enter file name'/>
          </div>
          <div>
            <SelectField value={this.props.value} onChange={this.handleFileChange} ref='fileType'>
              {items}
            </SelectField>
          </div>
        </div>
      </Dialog>
    );
  }
}

AddFileDialog.contextTypes= {
  store: React.PropTypes.object
}
