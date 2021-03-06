import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';
import $ from 'jquery';
import { LoginContext } from '../../SharedComponent/LoginContext';
import { Alert } from 'react-bootstrap';
import { ValidateLogin, ValidateSignUp } from '../LoginModel';
import { LinkContainer } from 'react-router-bootstrap';

class SignExpanded extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flexState: false,
			animIsFinished: false,
		};
		this.formSubmit = this.formSubmit.bind(this);
	}

	componentDidMount () {
     	this.setState({flexState: !this.state.flexState});  
  	}


	isFinished = () => {
		this.setState({animIsFinished: true});
	}

	async formSubmit(e) {
		e.preventDefault();
		if (this.props.type === 'signIn') { // Sign In
			let email = $("#email").val().trim();
			let pass = $("#password").val().trim();
			let login_result = await ValidateLogin(email, pass);
			if (login_result === false) {
				$("#signin-alert").css("display", "block");
				setTimeout(() => {$("#signin-alert").css("display", "none");}, 5000);
			} else {
				this.context.updateContext(true, login_result["fname"], login_result["lname"], login_result["email"],
									login_result["role"], login_result["url"]);
			}
		} else { // Sign Up
			let fullname = $("#name").val();
			let email = $("#email").val();
			let password = $("#password").val();
			let signup_result = await ValidateSignUp(fullname, email, password);
			if (signup_result) {
				$("#signup-alert-fail").css("display", "none");
				$("#signup-alert-succ").css("display", "block");
				setTimeout(() => {$("#signup-alert-succ").css("display", "none");}, 5000);
				$("#login-form").trigger("reset");
			} else {
				$("#signup-alert-succ").css("display", "none");
				$("#signup-alert-fail").css("display", "block");
				setTimeout(() => {$("#signup-alert-fail").css("display", "none");}, 5000);
			}
		}
	}

	render () {
		let signin = (
			<div>
				<Input
					id="email"
					type="text"
					placeholder="EMAIL" />
				<Input
					id="password"
					type="password"
					placeholder={this.context.lang === "vi" ? "M???T KH???U" : "PASSWORD"} />
			</div>
		);

		let signup = (
			<div>
				<Input
					id="name"
					type="text"
					placeholder={this.context.lang === "vi" ? "H??? V?? T??N" : "FULL NAME"} />
				<Input
					id="email"
					type="email"
					placeholder="EMAIL" />
				<Input
					id="password"
					type="password"
					placeholder={this.context.lang === "vi" ? "M???T KH???U" : "PASSWORD"} />
			</div>
		);
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
							id='login-form'
							onSubmit={this.formSubmit} 
							className='logForm' style={{
							WebkitTransform: `translate3d(0, ${y}px, 0)`,
							transform: `translate3d(0, ${y}px, 0)`,
							opacity: `${opacity}`
						}}>
							<h2 style={{marginBottom: '50px'}}>
								{this.props.type === 'signIn' ? (this.context.lang === "vi" ? '????NG NH???P' : 'SIGN IN') : (this.context.lang === "vi" ? '????NG K??' : 'SIGN UP')}
							</h2>
							{this.props.type === 'signIn' ? signin : signup}
							<SubmitButton type={this.props.type}></SubmitButton>
							{(this.props.type === 'signIn') &&
							<LinkContainer to='/forgot-pass' style={{cursor: 'pointer'}}>
								<a className='forgotPass'>{this.context.lang === "vi" ? "Qu??n m???t kh???u?" : "Forgot password?"}</a>
							</LinkContainer>
							}
							{(this.props.type === 'signIn') &&  
							<Alert id='signin-alert' variant='info' style={{display: 'none', marginTop: '5px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >
								{this.context.lang === "vi" ? "????ng nh???p th???t b???i" : "Signin failed"}
							</Alert>
							}
							{(this.props.type === 'signUp') &&  
							<Alert id='signup-alert-succ' variant='info' style={{display: 'none', marginTop: '5px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >
								{this.context.lang === "vi" ? "????ng k?? th??nh c??ng" : "Signup successed"}
							</Alert>
							}
							{(this.props.type === 'signUp') &&  
							<Alert id='signup-alert-fail' variant='warning' style={{display: 'none', marginTop: '5px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >
								{this.context.lang === "vi" ? "Th??ng tin ???? t???n t???i" : "Used email, try another one"}
							</Alert>
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

SignExpanded.contextType = LoginContext;

export default SignExpanded;