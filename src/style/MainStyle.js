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
  }
}
