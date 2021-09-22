import React , {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {Motion, spring} from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';

class SignExpanded extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flexState: false,
			animIsFinished: false
		};
	}

	componentDidMount () {
     	this.setState({flexState: !this.state.flexState});  
  	}


	isFinished = () => {
		this.setState({animIsFinished: true});
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
						<form className='logForm' style={{
							WebkitTransform: `translate3d(0, ${y}px, 0)`,
							transform: `translate3d(0, ${y}px, 0)`,
							opacity: `${opacity}`
						}}>
							<h2>{this.props.type === 'signIn' ? 'SIGN IN' : 'SIGN UP'}</h2>
							{this.props.type === 'signIn' ? signin : signup}
							<SubmitButton type={this.props.type}></SubmitButton>
							{(this.props.type === 'signIn') &&  
							<a href="/" className='forgotPass'> Forgot Password?</a>
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