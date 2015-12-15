import React from 'react'
    
export default class HelloCanvas extends React.Component{
    constructor(props){
        super(props); 
        console.log(props);
    }
    
    render() {
        return (
            <div></div>
        );
    }
}