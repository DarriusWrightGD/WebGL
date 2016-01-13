import React from 'react';
import PubSub from 'pubsub-js';
import Events from './Events';
import mui from 'material-ui';
import ErrorIcon from 'material-ui/lib/svg-icons/content/clear';
import style from '../style/MainStyle';

var {Card} = mui;

export default class EditorLog extends React.Component{
  constructor(props){
    super(props);
    this.state = {error : '' , logOpen: true, showError: false};
    this.bindEvents = this.bindEvents.bind(this);
    this.bindEvents();
  }

  bindEvents(){
    this.setErrorText = this.setErrorText.bind(this);
    this.toggleLog = this.toggleLog.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  componentWillMount(){
    this.componentMounted = true;
    this.errorToken = PubSub.subscribe(Events.shaderErrorEvent, function(e, errorText){
      this.setErrorText(errorText);
    }.bind(this));
    this.vsEvent = PubSub.subscribe(Events.vertexShaderUpdateEvent, function(){
      this.clearError();
    }.bind(this));
    this.fsEvent = PubSub.subscribe(Events.fragmentShaderUpdateEvent, function(){
      this.clearError();
    }.bind(this));
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.errorToken);
    PubSub.unsubscribe(this.vsEvent);
    PubSub.unsubscribe(this.fsEvent);
  }

  setErrorText(errorText){
    this.setState({error : errorText ,showError:true});
  }

  clearError(){
    if(this.componentMounted)
    {
      this.setState({showError: false});
    }
  }

  toggleLog(){
    this.setState({logOpen:!this.state.logOpen})
  }

  render(){
    var errorLog;
    if(this.state.showError)
    {
        errorLog = <div>
          <ErrorIcon style={style.errorIcon}/>
          <span className='error-log-text'>{this.state.error}</span>
        </div>
    }
    return (
      <Card className='shader-log'>
        <h2>Error Log</h2>
        {errorLog}
      </Card>
    );
  }
}
