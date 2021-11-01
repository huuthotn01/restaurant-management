import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';
import './index.css';
import MainComponent from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div className='App'>
            <MainComponent />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);