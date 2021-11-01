import React from 'react';
import ReactDOM from 'react-dom';
//import App from './login/App';
import './index.css';
import MainComponent from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Login } from './login/Login';

ReactDOM.render(
    <BrowserRouter>
        <div className='App'>
            <MainComponent />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);