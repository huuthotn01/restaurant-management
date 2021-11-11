import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ManagePage from '../Manager/ManagePageComponent'
import ManageOrderController from '../Manager/ManageOrder/ManageOrderController';
import ManageCustomerController from '../Manager/ManageCustomer/ManageCustomerController';
import ReservationPage from '../TableReservation/ReservationPage';
import Payment from '../Payment/PaymentComponent';
import { CancelTablePage } from '../TableCancelReservation/CancelTablePage';
import { ChangeInfo } from '../Login/ChangeInfoView';
import { ForgotPass } from '../Login/LoginController/ForgotPass';
import FoodOrdering  from '../FoodOrdering/FoodOrdering';
import { loginInfo, LoginContext } from './LoginContext';

class Main extends Component {
    constructor(props) {
		super(props);
		this.updateContext = (isin, fname, lname, email, role, url) => {
			this.setState(state => ({
				loginInfo: {
					isIn: isin,
					fName: fname,
					lName: lname,
					email: email,
					role: role,
					avatarURL: url,
					updateContext: this.state.loginInfo.updateContext
				}
			}));
		};
		this.state = {
			loginInfo: {
				isIn: loginInfo.isIn,
				fName: loginInfo.fName,
				lName: loginInfo.lName,
				email: loginInfo.email,
				role: loginInfo.role,
				avatarURL: loginInfo.avatarURL,
				updateContext: this.updateContext,
			}
		};
	}

	render(){
        return (
            <LoginContext.Provider value={this.state.loginInfo} >
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
                        <Route path='/food_ordering' component={FoodOrdering} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </LoginContext.Provider>
        );
    }
}

export default Main;