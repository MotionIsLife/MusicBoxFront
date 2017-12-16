import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import './App.css';
import Music from './Music';

//фун меняющая стор
//2. узнает о выстреле
//3. меняет данные в сторе
function playList(state = [], action){
    if(action.type === 'ADD_TRACK'){
//возвращаем новую копию стора
        return [
            //добавление в стор
            ...state,
            action.payload
        ]
    }
    return state;
}

//создаем новый стор для приложения
const store = createStore(playList);
// начальное состояние стора
console.log(store.getState());

//подписались на изменение стора с помощью функции subscribe
store.subscribe(() => {
    console.log('subscribe', store.getState());
});

//action-ы с типами и данными
//1. стреляет
store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });

let rootElement = (
    <div className="App">
        <div className="body">
            <body>
                <Music name="Радио тапок"/>
            </body>`
        </div>
    </div>
);

ReactDOM.render(rootElement, document.getElementById('root'));
