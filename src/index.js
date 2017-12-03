import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

let rootElement = (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>

        </header>
    </div>
);

ReactDOM.render(rootElement, document.getElementById('root'));
