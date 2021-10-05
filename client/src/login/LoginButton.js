import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginButton(props) {
    return (
        <div className='NavigationPanel'>
            <div className='dots' onClick={props.onClick}>
                <MdAccountCircle style={{cursor: 'pointer'}} />
            </div>
        </div>
    );
}

export { LoginButton };