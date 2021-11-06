import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginButton(props) {
    return (
        <div className='NavigationPanel'>
            <div className='dots' onClick={props.onClick}>
                <FaSignInAlt style={{cursor: 'pointer', 'margin-top': '12.5px', fontSize: '16px', color: 'black'}} />
            </div>
        </div>
    );
}

export { LoginButton };