import React from 'react';
import WebGLCanvas from './WebGLCanvas';


export default class App extends React.Component{
    render() {
        return (
            <div>
                <p>Welcome to webgl</p>
                <WebGLCanvas/>
            </div>
        );
    }
}