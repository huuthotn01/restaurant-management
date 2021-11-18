import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ManagePage from '../Manager/ManagePageComponent'
import ManageOrderController from '../Manager/ManageOrder/ManageOrderController';
import ManageCustomerController from '../Manager/ManageCustomer/ManageCustomerController';
import ReservationPage from '../TableReservation/ReservationPage';
import Payment from '../payment/PaymentComponent';
import { CancelTablePage } from '../TableCancelReservation/CancelTablePage';
import { ChangeInfo } from '../login/ChangeInfoView';
import { ForgotPass } from '../login/LoginController/ForgotPass';
import Ordering from '../FoodOrdering/OrderingController'
import FoodMenu from '../FoodOrdering/FoodMenuController';
import DrinkMenu from '../FoodOrdering/DrinkMenuController';
class Main extends Component {
	render(){
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/manage' component={ManagePage} />
                        <Route path='/reservation' component={ReservationPage}/>
                        <Route path='/manage_order' component={ManageOrderController} />
                        <Route path='/manage_customer' component={ManageCustomerController} />
                        <Route path='/payment' component={Payment} />   
                        <Route path='/cancel_reservation' component={CancelTablePage} />
                        <Route path='/change-info' component={ChangeInfo} />
                        <Route path='/forgot-pass' component={ForgotPass} />
                        <Route path='/ordering' component={Ordering} />
                        <Route path='/food-menu' component={FoodMenu} />
                        <Route path='/drink-menu' component={DrinkMenu} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;