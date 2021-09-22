import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container} from 'reactstrap';
// import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';

/*
class FromHome extends React.Component {
    render() {
        return (
            <h1>Redirect from Home ('/')</h1>
        );
    }
}

class FromTest extends React.Component {
    render() {
        return (
            <h1>Redirect from Test ('/test')</h1>
        );
    }
}

class First extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/test1" />
                    <Redirect exact from="/test" to="/test2" />
                    <Route path="/test1">
                        <FromHome />
                    </Route>
                    <Route path="/test2">
                        <FromTest />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
*/

ReactDOM.render(
    // <First />,
    <App />,
    document.getElementById('root')
);