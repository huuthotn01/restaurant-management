import React from 'react';
import PropTypes from 'prop-types';
import { ImUserPlus } from 'react-icons/im';
import {GoSignIn} from 'react-icons/go';

const SignCollapsed = (props) => {
	let icon = null;
	
	if (props.type === 'signIn') {
		icon = <GoSignIn className='iconsCollapsed'/>
	} else {
		icon = <ImUserPlus className='iconsCollapsed'/>
	}
	
	return (
		<div onClick={props.onChange} className={props.type === 'signIn' ? 'signInCollapsed' : 'signUpCollapsed'}>
			{icon}
		</div>
	);
}

SignCollapsed.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func
};


export default SignCollapsed;