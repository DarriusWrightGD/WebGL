import React from 'react';
import PubSub from 'pubsub-js';
import {Events} from './Events';
import {Panel} from 'react-bootstrap';

export default class ShaderLog extends React.Component{
  constructor(props){
    super(props);
    this.state = {shaderError : '' , shaderLogOpen: true, showError: false};
    this.bindEvents = this.bindEvents.bind(this);
    this.bindEvents();
  }

  bindEvents(){
    this.setErrorText = this.setErrorText.bind(this);
    this.toggleShaderLog = this.toggleShaderLog.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  componentWillMount(){
    this.componentMounted = true;
    this.setState({showError: false});

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
    this.setState({shaderError : errorText ,showError:true});
  }

  clearError(){
    if(this.componentMounted)
    {
      this.setState({showError: false});
    }
  }

  toggleShaderLog(){
    this.setState({shaderLogOpen:!this.state.shaderLogOpen})
  }

  render(){
    var errorLog;
    if(this.state.showError)
    {
        errorLog = <div>
          <span className='glyphicon glyphicon-remove error-cross'/>
          <span className='error-log-text'>{this.state.shaderError}</span>
        </div>
    }
    return (
      <Panel className='shader-log' collapsible expanded={this.state.shaderLogOpen} header='Shader Log' bsStyle='primary' onClick={this.toggleShaderLog}>
      {errorLog}
      </Panel>
    );
  }
}
