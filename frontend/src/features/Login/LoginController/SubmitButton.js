import React from 'react';
import PropTypes from 'prop-types';
import {MdArrowForward} from 'react-icons/md';
import {SignIn} from './Google';
import {LoginContext} from '../../SharedComponent/LoginContext';

class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let socialNets = (
			<div className='socialNets'>
				<LoginContext.Consumer>
					{value => (<SignIn context={value} />)}
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