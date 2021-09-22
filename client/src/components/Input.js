import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {MdVisibility, MdVisibilityOff} from 'react-icons/md';
import $ from 'jquery';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPass: false,
		};
		this.togglePassword = this.togglePassword.bind(this);
	}

	togglePassword() {
		if (this.state.showPass) $("#password").attr("type", "password");
		else $("#password").attr("type", "text");
		this.setState({ showPass: !this.state.showPass});
	}

	render() {
		let iconVisibility = null;

		if (this.props.type === 'password') {
			if (this.state.showPass) iconVisibility = (<MdVisibility onClick={this.togglePassword} className='iconVisibility'/>);
			else iconVisibility = (<MdVisibilityOff onClick={this.togglePassword} className='iconVisibility'/>);
		}

		return (
			<div className="Input">
				<input 
					id={this.props.id}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>
				{iconVisibility}
			</div>
		);
	}
}

Input.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	placeholer: PropTypes.string
};


export default Input;