import React, {Component} from 'react';
import {loginInfo, LoginContext} from './LoginContext';
import './Login.css';
import {NotIn} from './NotIn';
import {In} from './In';

class Login extends Component {
	constructor(props) {
		super(props);
		this.updateContext = (isin, fname, lname, email, url) => {
			this.setState(state => ({
				loginPopup: false,
				loginInfo: {
					isIn: isin,
					fName: fname,
					lName: lname,
					email: email,
					avatarURL: url,
					updateContext: this.state.loginInfo.updateContext
				}
			}));
		};
		this.state = {
			loginPopup: false,
			loginInfo: {
				isIn: loginInfo.isIn,
				fName: loginInfo.fName,
				lName: loginInfo.lName,
				email: loginInfo.email,
				avatarURL: loginInfo.avatarURL,
				updateContext: this.updateContext,
			}
		};
		this.loginWindowToggle = this.loginWindowToggle.bind(this);
	}

	loginWindowToggle() {
		this.setState({loginPopup: !this.state.loginPopup});
	}

	render() {
		return (
			<>
				<LoginContext.Provider value={this.state.loginInfo}>
					<LoginContext.Consumer>
						{(loginInfo) => (loginInfo.isIn ? 
							<In avatar={loginInfo.avatarURL} context={loginInfo} /> : 
							<NotIn loginPopup={this.state.loginPopup} onClick={this.loginWindowToggle} />
						)}
					</LoginContext.Consumer>
				</LoginContext.Provider>
			</>
		);
	}
}

export {Login};