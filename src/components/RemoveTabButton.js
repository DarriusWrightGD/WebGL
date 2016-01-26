import React from 'react';
import ClearIcon from 'material-ui/lib/svg-icons/content/clear';
import style from 'style/MainStyle';

export default ({onClick})=>(
  <ClearIcon
  style={style.removeIcon}
  onClick={onClick}
  />
);
