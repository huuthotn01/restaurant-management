/* global gapi */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {MdArrowForward} from 'react-icons/md';

class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
		this.onSignIn = this.onSignIn.bind(this);
	}

	componentDidMount() {
		gapi.signin2.render(
			'gg-signin2', {
			'onsuccess': this.onSignIn,
		});
	}

	onSignIn(googleUser) {
		let profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getID());
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageURL());
		console.log('Email: ' + profile.getEmail());
	}

	render() {
		let socialNets = null;

		if (this.props.type === 'signIn') {
			socialNets = (
				// <div id="gg-signin2" class="my-signin2" data-onsuccess={this.onSignIn}></div>
				<div className='socialNets'>
				</div>
			)
		} else {
			socialNets = (
				<div className='socialNets'>
				</div>
			)
		}
		return (
			<div className={'submitButton'}>
				{socialNets}
				<button className={this.props.type ==='signIn' ? 'submitSignIn' : 'submitSignUp'}><MdArrowForward/></button>
			</div>
		);
	}
} 

SubmitButton.propTypes = {
	type: PropTypes.string
};

export default SubmitButton;