import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import "./App.sass";

import {createStore} from "redux";
import {Provider} from 'react-redux';

import allReducers from './redux/reducers';

import {loadState, saveState} from "./redux/storage/localstore";

const persistedState = loadState();

let store = createStore(
    allReducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveState({
    todo: store.getState().todo
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);