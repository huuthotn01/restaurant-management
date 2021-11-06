import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';

const NavigationPanel = (props) => {
	return (
		<div className='NavigationPanel'>
			<ImCancelCircle onClick={props.onClick} className='back' />
			<div className='dots'>
				<MdAccountCircle />
			</div>
			<div style={{flex: 2}}></div>
		</div>
	);
}

export default NavigationPanel;