import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ToDoList from './ToDoListApp.js';
import {BrowserRouter} from 'react-router-dom'
import {link} from "react-router-dom"


ReactDOM.render(
<BrowserRouter>
<ToDoList/>
</BrowserRouter>
  ,
  document.getElementById('root')

);
serviceWorker.unregister();
