import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.haneClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('click')
    }
    render() {
        return <button onClick={this.handleClick}>Button</button>
    }
}