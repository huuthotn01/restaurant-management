import React from 'react';
import PropTypes from 'prop-types';
import { ImUserPlus } from 'react-icons/im';
import {GoSignIn} from 'react-icons/go';
import { LoginContext } from '../../SharedComponent/LoginContext';

const Sign = (props) => {

	let icon = null;

	if (props.type === 'signIn') {
		icon = <GoSignIn className='icons'/>
	} else {
		icon = <ImUserPlus className='icons'/>
	}

	return (
		<LoginContext.Consumer>
		{data => (
			<div onClick={props.onChange} className={props.type ==='signIn' ? 'signIn' : 'signUp'}>
				<div className='center'>
					{icon}
					<p>{props.type === 'signIn' ? (data.lang === "vi" ? 'ĐĂNG NHẬP' : 'SIGN IN') :
							(data.lang === "vi" ? 'ĐĂNG KÍ' : 'SIGN UP')}</p>
				</div>
			</div>
		)}
		</LoginContext.Consumer>
	);
}

Sign.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func	
};

export default Sign;