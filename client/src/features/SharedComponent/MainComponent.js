import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ManagePage from '../Manager/ManagePageComponent'
import ManageOrderController from '../Manager/ManageOrder/ManageOrderController';
import ManageCustomerController from '../Manager/ManageCustomer/ManageCustomerController';
import ReservationPage from '../TableReservation/ReservationPage';
import Payment from '../Payment/PaymentView/PaymentView';
import MOMO from '../Payment/PaymentView/paymentMomo';
import Paymentbycash from '../Payment/PaymentView/paymentCash';
import PaymentCard from '../Payment/PaymentView/paymentBankCard';
import { CancelTablePage } from '../TableCancelReservation/CancelTablePage';
import Ordering from '../FoodOrdering/OrderingController'
import FoodMenu from '../FoodOrdering/FoodMenuController';
import DrinkMenu from '../FoodOrdering/DrinkMenuController';
import { ChangeInfo } from '../Login/ChangeInfoView';
import { ForgotPass } from '../Login/LoginController/ForgotPass';
import { LoginContext } from './LoginContext';
import SearchPage from '../FoodOrdering/SearchPageController';

class Main extends Component {
    constructor(props) {
		super(props);
		this.updateContext = (isin, fname, lname, email, role, url) => {
            console.log("URL: ", url);
            if (url === "" || url === undefined) url = 'assets/images/blank_avatar.jpg';
			this.setState(state => ({
				loginInfo: {
					isIn: isin,
					fName: fname,
					lName: lname,
					email: email,
					role: role,
					avatarURL: url,
					lang: this.state.loginInfo.lang,
					updateContext: this.state.loginInfo.updateContext,
					changeLang: this.state.loginInfo.changeLang
				}
			}));
		};
		this.changeLang = (lang) => {
			this.setState(state => ({
				loginInfo: {
					isIn: this.state.loginInfo.isIn,
					fName: this.state.loginInfo.fName,
					lName: this.state.loginInfo.lName,
					email: this.state.loginInfo.email,
					role: this.state.loginInfo.role,
					avatarURL: this.state.loginInfo.avatarURL,
					lang: lang,
					updateContext: this.state.loginInfo.updateContext,
					changeLang: this.state.loginInfo.changeLang
				}
			}));
		};
		this.state = {
			loginInfo: {
				isIn: '',
				fName: '',
				lName: '',
				email: '',
				role: '',
				avatarURL: '',
				lang: 'vi',
				updateContext: this.updateContext,
				changeLang: this.changeLang
			}
		};
	}

	async componentDidMount() {
		const response = await fetch('/verify', {
            method: "GET"
        });
		if (response.status !== 200) console.log("MainComponent Error occurred!");
		const body = await response.json();
		if (body.succ) {
			const data = body.data;
			this.updateContext(true, data.fname, data.lname, data.email, data.role, data.url);
		}
	}

	render() {
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
						<Route path='/ordering' component={Ordering} />
						<Route path='/food-menu' component={FoodMenu} />
						<Route path='/drink-menu' component={DrinkMenu} />
						<Route path='/search_item' component={SearchPage} />	
						<Route path='/payment' component={Payment} />  
						<Route path='/paymentcash' component={Paymentbycash} />
						<Route path='/paymentmomo' component={MOMO} /> 
						<Route path='/paymentbankcard' component={PaymentCard} /> 
						{this.state.loginInfo.role === "2" ? <Redirect to='/manage' /> : <Redirect to='/home' />}
					</Switch>
				</div>
				<Footer />
			</LoginContext.Provider>
        );
    }
}

export default Main;