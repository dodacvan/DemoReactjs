    import React, { Component } from 'react';
    import './App.css';

    class Demo extends Component {
        
        handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }

        render() {
            return ( <h1>Hello Demo Component, world!</h1>
            );
        }
    }
    export default Demo;