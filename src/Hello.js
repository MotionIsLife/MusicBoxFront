import React, { Component } from 'react';
class Hello extends Component {

    render() {
        const element = <h1>Trololo</h1>;
        return (
            <div>Hello, {this.props.name}, {element}!</div>
        );
    }
};
export default Hello;