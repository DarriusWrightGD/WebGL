import Colors from 'material-ui/lib/styles/colors';

var icon = {
  width:19,
  height:19,
  marginRight:5,
  fill: Colors.white
}

module.exports ={
  errorIcon: {
    ...icon,
    marginLeft:10,
    marginBottom:20,
    fill: Colors.redA400
  },
  addFileIcon:{
    ...icon
  },
  removeIcon:{
    ...icon
  },
  projectIcon:{
    ...icon
  },
  addContentButtonGroup: {
    position:'absolute',
    color:'white',
    bottom:10,
    left:'15%',
    borderTop: '1px solid grey'
  },
  fileExplorer: {
    color:'white',
    background:'#141414',
    height:445,
    borderRight:'1px solid grey'
  },
  dialogForm: {
    paddingLeft:'30%',
    width:'100%'
  }

}
