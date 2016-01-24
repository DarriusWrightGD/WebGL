let Colors = require('material-ui/lib/styles/colors');
let Spacing = require('material-ui/lib/styles/spacing');
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import zIndex from 'material-ui/lib/styles/zIndex';
import mui from 'material-ui';

var {Styles} = mui;

module.exports = //Styles.darkBaseTheme;
{
//   spacing: Spacing,
//   fontFamily: 'Roboto, sans-serif',
//   palette: {
//     primary1Color: Colors.grey900,
//     primary2Color: Colors.darkBlack,
//     primary3Color: Colors.grey500,
//     accent1Color: Colors.black,
//     accent2Color: Colors.grey100,
//     accent3Color: Colors.grey200,
//     textColor: Colors.darkBlack,
//     alternateTextColor: Colors.white,
//     canvasColor: Colors.grey300,
//     borderColor: Colors.grey300,
//     disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
//   }
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.black,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.grey500,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
  }
 };
