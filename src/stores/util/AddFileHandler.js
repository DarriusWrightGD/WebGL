
import _ from 'lodash';
import Guid from '../../util/Guid';
import EditorTab from '../../components/EditorTab';
import RemoveIcon from 'material-ui/lib/svg-icons/content/clear';

addTab(state, file){
  var tab = _.find(state.tabs, function(t){ return t.key == file.name});
  if(!tab)
  {
    var guid = Guid.generate();

    var label =  <span>{this.props.file.name}
          <RemoveIcon
            style={style.removeIcon}
            onClick={(event)=>{
              event.stopPropagation();
              const {store} = this.context;
              store.dispatch({type:Events.removeFileEvent, guid: this.props.value})
            }
          }/>
    </span>

    return {
      ...state,
      tabs:[...state.tabs, <EditorTab value={guid}, key={file.name} file={file} label={label} />],
      currentTab:guid
    }
  }else{
    return {
      ...state,
      editor:{
        ...state.editor,
        currentTab: tab.props.value
      }
    }
  }
}


module.exports = {
  handle : function(state, action){
    return addTab(state,action.file);
  }
}
