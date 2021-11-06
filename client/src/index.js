import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
//import 'react-pro-sidebar/dist/css/styles.css';
import './index.css';
import HomeComponent from './HomeComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div className='App'>
            <HeaderComponent />
            <HomeComponent />
            <FooterComponent />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);