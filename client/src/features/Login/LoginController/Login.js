import React from 'react';
import { LoginContext } from '../../SharedComponent/LoginContext';
import './Login.css';
import {NotIn} from './NotIn';
import {In} from './In';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginPopup: false
		};
		this.loginWindowToggle = this.loginWindowToggle.bind(this);
	}

	loginWindowToggle(state) {
		if (state) this.setState({loginPopup: !this.state.loginPopup});
		else this.setState({loginPopup: false});
	}

	render() {
		return (
			<>
				{this.context.isIn ? <In /> : 
					<NotIn loginPopup={this.state.loginPopup} onClick={this.loginWindowToggle} />
				}
			</>
		);
	}
}

Login.contextType = LoginContext;

export {Login};