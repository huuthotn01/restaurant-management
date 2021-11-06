import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ManageView from '../Manager/ManageViewComponent'
import ManageOrderController from '../Manager/ManageOrder/ManageOrderController';
import ReservationPage from '../TableReservation/ReservationPage'

class Main extends Component {
	render(){
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/reservation' component={ReservationPage}/>
                        <Route path='/manage' component={ManageView} />
                        <Route path='/manage_order' component={ManageOrderController} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;