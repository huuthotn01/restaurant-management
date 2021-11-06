import React from 'react';
import PropTypes from 'prop-types';
import {MdArrowForward} from 'react-icons/md';
import {Login} from './Google';
import {LoginContext} from './LoginContext';

class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
		// this.onSignIn = this.onSignIn.bind(this);
	}

	render() {
		let socialNets = (
			<div className='socialNets'>
				<LoginContext.Consumer>
					{(loginInfo) => (<Login context={loginInfo} />)}
				</LoginContext.Consumer>
			</div>
		);
		return (
			<div className={'submitButton'}>
				{socialNets}
				<button className={this.props.type === 'signIn' ? 'submitSignIn' : 'submitSignUp'}><MdArrowForward/></button>
			</div>
		);
	}
} 

SubmitButton.propTypes = {
	type: PropTypes.string
};

export default SubmitButton;