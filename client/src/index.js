import React from 'react';
import ReactDOM from 'react-dom';
//import App from './login/App';
import './index.css';
import MainComponent from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Login } from './login/Login';
import './login/Login.css';

ReactDOM.render(
    /*
    <BrowserRouter>
        <div className='App'>
            <MainComponent />
        </div>
    </BrowserRouter>,*/
    <Login />,
    document.getElementById('root')
);