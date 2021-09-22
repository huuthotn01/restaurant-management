import React, {Component} from 'react';
import LoginWindow from './login/LoginWindow';
// import {Button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginButton } from './login/LoginButton';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginPopup: false,
		}
		this.loginPopup = this.loginPopup.bind(this);
	}

	loginPopup() {
		this.setState({loginPopup: !this.state.loginPopup});
	}

	render() {
		return (
			<div>
				<LoginButton onClick={this.loginPopup} />
				{this.state.loginPopup && <LoginWindow />}
			</div>
		);
	}
}

export default App;
