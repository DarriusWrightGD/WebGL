import React from 'react';
import mui from 'material-ui';

var {IconButton, FlatButton, Dialog, TextField, MenuItem, SelectField} = mui;

export default class AddFileButton extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {open:false, value:1};
    this.addFile = this.addFile.bind(this);
  }

  openFileDialog= ()=>{
      this.setState({open:true});
  };

  closeFileDialog= ()=>{
      this.setState({open:false});
  };

  handleTypeChange= (event, index, value)=>{
    this.setState({value:value})
  };

  addFile= ()=>{

  };

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.closeFileDialog} />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.closeFileDialog} />,
    ];
    return (
      <span>
        <IconButton
          onClick={this.openFileDialog}
          style={{cursor:'pointer'}}
          iconClassName="material-icons"
          tooltip='Add File'>
          <span style={{color:'white'}}>note_add</span>
        </IconButton>
        <Dialog
          title="Add a file"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.closeFileDialog}>
          <div style={{paddingLeft:'30%', width:'100%'}}>
            <div>
              <TextField ref='path' hintText='Enter path'/>
            </div>
            <div>
              <TextField ref='fileName' hintText='Enter file name'/>
            </div>
            <div>
              <SelectField value={this.state.value} onChange={this.handleTypeChange} ref='fileType'>
                <MenuItem value={1} primaryText="JavaScript"/>
                <MenuItem value={2} primaryText="GLSL"/>
              </SelectField>
            </div>
          </div>
        </Dialog>
      </span>
    );
  }
}

AddFileButton.contextTypes = {
  store: React.PropTypes.object
}
