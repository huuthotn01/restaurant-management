import React from 'react';
import PropTypes from 'prop-types';
import { ImUserPlus } from 'react-icons/im';
import {GoSignIn} from 'react-icons/go';

const Sign = (props) => {

	let icon = null;

	if (props.type === 'signIn') {
		icon = <GoSignIn className='icons'/>
	} else {
		icon = <ImUserPlus className='icons'/>
	}

	return (
		<div onClick={props.onChange} className={props.type ==='signIn' ? 'signIn' : 'signUp'}>
			<div className='center'>
				{icon}
				<p>{props.type === 'signIn' ? 'SIGN IN' : 'SIGN UP'}</p>
			</div>
		</div>
	);
}

Sign.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func	
};

export default Sign;