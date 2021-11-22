import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect} from 'react-router-dom';
import {Motion, spring} from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';
import $ from 'jquery';
import {loginInfo, LoginContext} from './LoginContext';

class SignExpanded extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flexState: false,
			animIsFinished: false,
			role: 0
		};
		this.formSubmit = this.formSubmit.bind(this);
	}

	componentDidMount () {
     	this.setState({flexState: !this.state.flexState});  
  	}


	isFinished = () => {
		this.setState({animIsFinished: true});
	}

	formSubmit(e) {
		e.preventDefault();
		let username = $("#username").val();
		// let pass = $("#password").val();
		if (username === '1') this.setState({role: 1});
		else this.setState({role: 2});
	}

	render () {
		let signin = (
			<div>
				<Input
					id="username"
					type="text"
					placeholder="USERNAME, EMAIL OR PHONE NUMBER" />
				<Input
					id="password"
					type="password"
					placeholder="PASSWORD" />
			</div>
		);

		let signup = (
			<div>
				<Input
					id="name"
					type="text"
					placeholder="FULL NAME" />
				<Input
					id="email"
					type="email"
					placeholder="EMAIL" />
				<Input
					id="password"
					type="password"
					placeholder="PASSWORD" />
			</div>
		);
		if (this.state.role === 2) {
			return (
				<LoginContext.Consumer>
				{(loginInfo) => {
				loginInfo.updateContext(true, 'Gia Cat', 'Nguyen Khoa', 'giacat', '');
				return (
					<Switch>
						<Redirect to='/manage' />
					</Switch>);
				}}
				</LoginContext.Consumer>
			);
		}

		return (
			<Motion style={{
				flexVal: spring(this.state.flexState ? 8 : 1)
			}} onRest={this.isFinished}>
			{({flexVal}) =>
			<div className={this.props.type ==='signIn' ? 'signInExpanded' : 'signUpExpanded'} style={{
				flexGrow: `${flexVal}`
			}}>
				<Motion style={{ 
					opacity: spring(this.state.flexState ? 1 : 0,{stiffness: 300, damping: 17}),
					y: spring(this.state.flexState ? 0 : 50, {stiffness: 100, damping: 17})
				 }} >
						{({opacity, y}) =>
						<form 
							onSubmit={this.formSubmit} 
							className='logForm' style={{
							WebkitTransform: `translate3d(0, ${y}px, 0)`,
							transform: `translate3d(0, ${y}px, 0)`,
							opacity: `${opacity}`
						}}>
							<h2>{this.props.type === 'signIn' ? 'SIGN IN' : 'SIGN UP'}</h2>
							{this.props.type === 'signIn' ? signin : signup}
							<SubmitButton type={this.props.type}></SubmitButton>
							{(this.props.type === 'signIn') &&  
							<a href="/forgot-pass" className='forgotPass'> Forgot Password?</a>
							}
						</form>
						}
				</Motion>
			</div>
		}
			</Motion>
		);
	}

}

SignExpanded.propTypes ={
	type: PropTypes.string	
};

export default SignExpanded;