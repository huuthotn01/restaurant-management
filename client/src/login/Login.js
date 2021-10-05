import React, {Component} from 'react';
import {loginInfo, LoginContext} from './LoginContext';
import './Login.css';
import {NotIn} from './NotIn';
import {In} from './In';

class Login extends Component {
	constructor(props) {
		super(props);
		this.updateContext = (isin, fname, url) => {
			this.setState(state => ({
				loginPopup: false,
				loginInfo: {
					isIn: isin,
					fName: fname,
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
			<div>
				<LoginContext.Provider value={this.state.loginInfo}>
					<LoginContext.Consumer>
						{(loginInfo) => 
							(loginInfo.isIn ? 
								<In avatar={loginInfo.avatarURL} context={loginInfo} /> : 
								<NotIn loginPopup={this.state.loginPopup} onClick={this.loginWindowToggle} />
							)}
					</LoginContext.Consumer>
				</LoginContext.Provider>
			</div>
		);
	}
}

export {Login};