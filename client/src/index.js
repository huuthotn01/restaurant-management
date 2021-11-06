import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';
import './index.css';
import MainComponent from './features/SharedComponent/MainComponent';
import './index.css';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div className='App'>
            <MainComponent />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
