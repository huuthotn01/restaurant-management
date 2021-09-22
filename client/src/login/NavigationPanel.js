import React from 'react';
import '../App.css';
import { MdArrowBack, MdAccountCircle } from 'react-icons/md';

const NavigationPanel = (props) => {

	return (
		<div className='NavigationPanel'>
			<MdArrowBack onClick={props.initialState} className='back'/>
			<div className='dots'>
				<MdAccountCircle />
			</div>
			<div style={{flex: 2}}></div>
		</div>
	);
}



export default NavigationPanel;