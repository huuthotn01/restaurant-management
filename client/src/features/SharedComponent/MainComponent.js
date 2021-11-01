import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ManageView from '../Manager/ManageViewComponent'
import ManageOrderView from '../Manager/ManageOrderView';

class Main extends Component {
	render(){
        const HomePage = () => {
            return(
            <Home />
            );
        }
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route path='/manage' component={ManageView} />
                        <Route path='/manage_order' component={ManageOrderView} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;