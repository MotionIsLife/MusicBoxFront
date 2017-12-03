import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Music from './Music';

let rootElement = (
    <div className="App">
        <div className="body">
            <body>
                <Music name="Радио тапок"/>
            </body>
        </div>
    </div>
);

ReactDOM.render(rootElement, document.getElementById('root'));
