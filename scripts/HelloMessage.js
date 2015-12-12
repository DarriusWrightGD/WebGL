import React from 'react'; 

export class HelloMessage extends React.Component{
    render() {
      return (
       <div>Hello {this.props.name}</div>
      );
    }
}

module.exports = HelloMessage;