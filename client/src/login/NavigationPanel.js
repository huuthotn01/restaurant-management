import React from 'react';
import { MdArrowBack, MdAccountCircle } from 'react-icons/md';

const NavigationPanel = (props) => {
	return (
		<div className='NavigationPanel'>
			<MdArrowBack onClick={props.onClick} className='back' />
			<div className='dots'>
				<MdAccountCircle />
			</div>
			<div style={{flex: 2}}></div>
		</div>
	);
}

export default NavigationPanel;