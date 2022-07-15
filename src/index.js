import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import "./App.sass";

import { createStore } from "redux";

import allReducers from './reducers';

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);