import editor from './reducers/EditorReducer';
import {combineReducers} from 'redux';

module.exports = {
  shaderApp : combineReducers({editor})
}
