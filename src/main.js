// import "app-module-path/register";
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import {createStore} from 'redux'
import {shaderApp} from './stores/MainStore'
import ShaderAppTheme from './themes/ShaderAppTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Provider from './components/Provider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require('material-design-icons/iconfont/material-icons.css');
require('./main.scss');

var store = createStore(shaderApp);

const render = ()=>{
  ReactDOM.render(
    <Provider store={store} muiTheme={ThemeManager.getMuiTheme(ShaderAppTheme)}>
      <App/>
    </Provider>,
    document.getElementById('app'));
}

store.subscribe(render);
render();
