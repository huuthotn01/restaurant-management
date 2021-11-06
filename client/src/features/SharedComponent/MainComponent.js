import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ManagePage from '../Manager/ManagePageComponent'
import ManageOrderController from '../Manager/ManageOrder/ManageOrderController';
import ManageCustomerController from '../Manager/ManageCustomer/ManageCustomerController';

class Main extends Component {
	render(){
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/manage' component={ManagePage} />
                        <Route path='/manage_order' component={ManageOrderController} />
                        <Route path='/manage_customer' component={ManageCustomerController} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;